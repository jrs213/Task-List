<script setup lang="ts">
import { onMounted, onUnmounted, ref, nextTick, getCurrentInstance } from 'vue'
import { remult } from 'remult'
import { Task } from './shared/Task'
import { TasksController } from '@/shared/TasksController'

function timeAgo(date?: Date) {
  if (!date) return ''
  const now = new Date()
  const diff = Math.floor((now.getTime() - new Date(date).getTime()) / 1000)
  if (diff < 60) return `${diff} seconds ago`
  if (diff < 3600) return `${Math.floor(diff / 60)} minutes ago`
  if (diff < 86400) return `${Math.floor(diff / 3600)} hours ago`
  return `${Math.floor(diff / 86400)} days ago`
}


const taskRepo = remult.repo(Task)
const tasks = ref<Task[]>([])

onMounted(() =>
  onUnmounted(
    taskRepo
      .liveQuery({
        limit: 20,
        orderBy: { createdAt: "asc" }
        //where: { completed: true },
      })
      .subscribe(info => (tasks.value = info.applyChanges(tasks.value)))
  )
)

const newTaskTitle = ref('')

async function addTask() {
  try {
    const newTask = await taskRepo.insert({ title: newTaskTitle.value })
    // tasks.value.push(newTask)
    newTaskTitle.value = ''
  } catch (error: unknown) {
    alert((error as { message: string }).message)
  }
}

async function saveTask(task: Task) {
  try {
    await taskRepo.save(task)
  } catch (error: unknown) {
    alert((error as { message: string }).message)
  }
}

async function deleteTask(task: Task) {
  try {
    await taskRepo.delete(task)
    // tasks.value = tasks.value.filter(t => task !== t)
  } catch (error: unknown) {
    alert((error as { message: string }).message)
  }
}

const clearAllTasks = async () => {
  try {
    const allTasks = await taskRepo.find()
    for (const task of allTasks) {
      await taskRepo.delete(task)
    }
    tasks.value = []
  } catch (error: unknown) {
    alert((error as { message: string }).message)
  }
}

</script>
<template>
  <div>
    <h1>Todo List</h1>
    <main>
      <form @submit.prevent="addTask">
        <input v-model="newTaskTitle" placeholder="What needs done?" />
        <button style="background-color: #5a9cfd;" type="submit">Add</button>
        <button style="background-color: #f44336; margin-left: 10px;" type="button" @click="clearAllTasks">Clear
          All</button>
      </form>
      <div v-for="(task, idx) in tasks">
        <input type="checkbox" v-model="task.completed" @change="saveTask(task)" />
        <input v-model="task.title" :ref="`editInput${idx}`" />
        <span style="margin-right: 1em; color: #888; font-size: 0.9em; width: 100%;">
          {{ timeAgo(task.createdAt) }}
        </span>
        <!-- SAVE BUTTON TO IMPLEMENT EDITS (TBD) -->
        <button style="background-color: #5a9cfd;" @click="saveTask(task)">Save Change</button>
        <button style="background-color: transparent; border:none; margin-left: 10px;color:red; font-weight: 800;"
          @click="deleteTask(task)">X</button>
      </div>
    </main>
  </div>
</template>