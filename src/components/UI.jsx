import {Link} from 'react-router-dom';
import {Star,ArrowRight,Gamepad2,X} from 'lucide-react';
import {useEffect,useRef} from 'react';
import {money,salePrice} from '../utils/shop';
export function Button({to,variant='',children,...props}){return to?<Link className={`btn ${variant}`} to={to} {...props}>{children}</Link>:<button className={`btn ${variant}`} {...props}>{children}</button>}
export function Input({label,id,...props}){return <label className="field" htmlFor={id}>{label}<input id={id} {...props}/></label>}
export function Rating({game}){return <span className="rating"><Star size={13} fill="currentColor"/> {game.rating.toFixed(1)}</span>}
export function PriceDisplay({game}){return <span className="price">{game.discount>0&&<><span className="discount">−{game.discount}%</span><del>{money(game.price)}</del></>}<strong>{money(salePrice(game))}</strong></span>}
export function SectionHeading({eyebrow,title,to='/store',link='View all games'}){return <div className="section-heading"><div>{eyebrow&&<div className="eyebrow">{eyebrow}</div>}<h2>{title}</h2></div><Link to={to}>{link} <ArrowRight size={16}/></Link></div>}
export function EmptyState({title='Your next adventure is out there',text='Explore the store to find something you love.',icon:Icon=Gamepad2}){return <div className="empty"><Icon size={52}/><h2>{title}</h2><p>{text}</p><Button to="/store">Explore the store <ArrowRight size={17}/></Button></div>}
export function LoadingSkeleton(){return <div className="loading" aria-label="Loading page" role="status"><div/><div/><div/></div>}
export function Modal({title,children,onClose}){const ref=useRef();useEffect(()=>{const dialog=ref.current;dialog.showModal();return()=>dialog.close()},[]);return <dialog ref={ref} className="modal" onCancel={onClose} onClick={e=>e.target===ref.current&&onClose()}><button className="icon-button modal-close" onClick={onClose} aria-label="Close dialog"><X/></button><h2>{title}</h2>{children}</dialog>}
