type HeaderProps = {
    title: string;
    name: string;
    id: number; 
}
const Header = ({title, name, id}: HeaderProps) => {
   
    return (
        <div className='flex justify-center items-end space-x-2'>
            <span className='text-center italic my-2 text-2xl'>{title}</span>
            <span className='text-gray-400 italic my-2 text-xl'> by {name}{id} </span>
        </div>
    )
}

export default Header