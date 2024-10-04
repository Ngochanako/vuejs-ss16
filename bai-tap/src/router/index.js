import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import ContactView from '@/views/ContactView.vue'
import RegisterView from '@/views/RegisterView.vue'
import LoginView from '@/views/LoginView.vue'
import NotFound from '@/views/NotFound.vue'
import ListUser from '@/views/ListUser.vue'
import UserDetail from '@/views/UserDetail.vue'
import ListEmployee from '@/views/ListEmployee.vue'
import Employee from '@/views/Employee.vue'
import Contacts from '@/views/Contacts.vue'
import Projects from '@/views/Projects.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      component:AboutView
    },
    {
      path:'/contact',
      name:'contact',
      component:ContactView
    },
    {
      path:'/register',
      name:'register',
      component:RegisterView
    },
    {
      path:'/login',
      name:'login',
      component:LoginView
    },
    {
      path:'/:pathMatch(.*)*',
      name:'notfound',
      component:NotFound
    },
    {
      path:'/users',
      name:'ListUser',
      component:ListUser
    },
    {
      path:'/users/:id',
      name:'UserDetail',
      component:UserDetail
    },
    {
      path:'/employees',
      name:'ListEmployee',
      component:ListEmployee,
      children:[
        {
          path:':id',
          name:'Employee',
          component: Employee,
          children:[
            {
              path:'contact',
              name:'Contacts',
              component:Contacts
            },
            {
              path:'project',
              name:'Projects',
              component: Projects
            }
          ]
        }
      ]
    },
    // {
    //   path:'/employees/:id',
    //   name:'Employee',
    //   component:Employee
    // }
  ]
})

export default router
