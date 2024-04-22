import './title.css'

export default function Title({children, name}){
    return(
        <div className='title'>
            {children}
            <div className='logo-usuário'>
                
            </div>
        </div>
    )   
}