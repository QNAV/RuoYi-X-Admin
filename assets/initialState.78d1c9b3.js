import{d as i}from"./keepAlive.f0c02c00.js";import{n as o,o as n}from"./index.cb547656.js";import{u as a}from"./useQuery.esm.7513095b.js";const r=["global","initialState"],f=()=>{const e=i();return a(r,async()=>{const[s,t]=await Promise.all([o(),n()]);return{userInfo:s,userRoutes:t}},{staleTime:1/0,cacheTime:1/0,onSuccess:s=>{e(s.userInfo.permissions)}})};export{r as i,f as u};
