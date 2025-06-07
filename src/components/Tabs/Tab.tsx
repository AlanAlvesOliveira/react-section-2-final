import type React from "react";

interface TabsProps {
    children: React.ReactNode;
    buttons: React.ReactNode;
    ButtonsContainer: React.ElementType    
} 

//no video ele chama esssas props de slots
export default function Tabs({ children , buttons, ButtonsContainer = 'menu' }: TabsProps) {
    return (
        <>
            <ButtonsContainer>
                {buttons}
            </ButtonsContainer>
            {children}
        </>
    );
}