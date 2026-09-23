import {createContext,useContext,useState,useEffect} from 'react';
import {useStorage} from '../hooks/useStorage';
import {games} from '../data/games';
const Context=createContext();
export function ShopProvider({children}) {
 const [cart,setCart]=useStorage('gv-cart',[]),[wishlist,setWishlist]=useStorage('gv-wishlist',[]),[orders,setOrders]=useStorage('gv-orders',[]),[savedUser,setSavedUser]=useStorage('gv-user',null),[sessionUser,setSessionUser]=useStorage('gv-session',null,sessionStorage),[toast,setToast]=useState('');
 const user=sessionUser||savedUser;
 const notify=message=>setToast(message);
 useEffect(()=>{if(toast){const id=setTimeout(()=>setToast(''),3200);return()=>clearTimeout(id)}},[toast]);
 const addCart=id=>{if(!games.some(g=>g.id===id))throw new Error('Unknown game');setCart(prev=>prev.includes(id)?prev:[...prev,id]);notify('Game added to your cart');};
 const removeCart=id=>setCart(prev=>prev.filter(x=>x!==id));
 const toggleWish=id=>{setWishlist(prev=>prev.includes(id)?prev.filter(x=>x!==id):[...prev,id]);};
 const login=(info,remember)=>{setSavedUser(remember?info:null);setSessionUser(remember?null:info)};
 const logout=()=>{setSavedUser(null);setSessionUser(null)};
 const placeOrder=customer=>{const id='GV-'+crypto.randomUUID().slice(0,8).toUpperCase();const order={id,date:new Date().toISOString(),items:[...cart],customer};setOrders(prev=>[order,...prev]);setCart([]);return id;};
 useEffect(()=>{const context=document.modelContext;if(!context?.registerTool)return;const lifecycle=new AbortController();const tool={name:'search_gamevault_catalog',description:'Search the fictional GameVault catalog without changing the cart.',inputSchema:{type:'object',properties:{query:{type:'string'}},required:['query'],additionalProperties:false},annotations:{readOnlyHint:true},execute:input=>{if(typeof input?.query!=='string')throw new Error('query must be a string');return games.filter(g=>g.title.toLowerCase().includes(input.query.toLowerCase())).map(({id,title,price,discount})=>({id,title,price,discount}));}};try{Promise.resolve(context.registerTool(tool,{signal:lifecycle.signal})).catch(()=>{})}catch{}return()=>lifecycle.abort();},[]);
 return <Context.Provider value={{cart,wishlist,orders,user,addCart,removeCart,toggleWish,login,logout,placeOrder,notify}}>{children}<div className={`toast ${toast?'show':''}`} role="status">{toast}</div></Context.Provider>
}
export const useShop=()=>useContext(Context);
