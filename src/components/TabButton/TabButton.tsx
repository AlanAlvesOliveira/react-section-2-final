

interface TabButtonProps {
    children: string,
    onSelect : () => void,
    isSelected: boolean
    
}

export default function TabButton({ children, onSelect, isSelected }: TabButtonProps) {
    
    return (
        <li>
            <button onClick={onSelect} className={isSelected ? 'active': undefined} >{children}</button>
        </li>
    )
}