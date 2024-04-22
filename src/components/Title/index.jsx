import './title.css'

export default function Title({children, avatar}){

    return(
        <div className='title'>
            {children}
            <div className='logo-usuario'>
                <img src={avatar}/>
            </div>
        </div>
    )   
}