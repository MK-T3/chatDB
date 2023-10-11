import React, { useState } from "react";
import {
    Card,
    Typography,
    List,
    ListItem,
    ListItemPrefix,
    ListItemSuffix,
    Chip,
    Accordion,
    AccordionHeader,
    AccordionBody,
    Alert,
    Input,
} from "@material-tailwind/react";
import {
    PresentationChartBarIcon,
    ShoppingBagIcon,
    UserCircleIcon,
    Cog6ToothIcon,
    InboxIcon,
    PowerIcon,
} from "@heroicons/react/24/solid";
import {
    ChevronRightIcon,
    ChevronDownIcon,
    CubeTransparentIcon,
    MagnifyingGlassIcon,
} from "@heroicons/react/24/outline";


export const Sqlsidebar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <>
            <Card className="h-screen w-full max-w-[20rem] p-4 shadow-xl shadow-blue-gray-900/5">
                <div className="h-screen w-full max-w-[20rem] p-4 shadow-xl shadow-blue-gray-900/5">
                    여기에 열립니다잉
                </div>
                <hr className="my-2 border-blue-gray-50" />
            </Card>
        </>
    )
}