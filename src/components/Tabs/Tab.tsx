
interface TabsProps {
    children: React.ReactNode;
    buttons: React.ReactNode;
}
//no video ele chama esssas props de slots
export default function Tabs({ children , buttons }: TabsProps) {
    return (
        <>
            <menu>
                {buttons}
            </menu>
            {children}
        </>
    );
}