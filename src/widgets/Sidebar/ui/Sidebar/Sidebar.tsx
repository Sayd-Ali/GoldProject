import { useState } from 'react';
import { classNames } from "shared/lib";
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
import cls from './Sidebar.module.scss';
import { LangSwitcher } from 'widgets/LangSwitcher/LangSwitcher';


interface SidebarProps {
    className?: string;
}
export const Sidebar = ({className}: SidebarProps) => {
    const [collapsed, setCollapsed] = useState(false);
    
    const handleCollapsed = () => {
        setCollapsed((prev) => !prev);
    }

    return (
        <div className={classNames(cls.Sidebar, {[cls.collapsed]: collapsed}, [className])}>
            <button onClick={handleCollapsed}>toggle</button>
            <div className={cls.switchers}>
                <ThemeSwitcher />
                <LangSwitcher className={cls.lang}/>
            </div>
        </div>
    )
}