// resources/js/Components/Icon.jsx

import {
    WrenchScrewdriverIcon,
    BuildingOffice2Icon,
    ClipboardDocumentListIcon,
    ChartPieIcon,
    UserGroupIcon,
    ShieldCheckIcon
    // You can import any other icons you want to offer from this library
} from '@heroicons/react/24/outline'; // We use 'outline' for a clean, professional look

export default function Icon({ name, className = 'w-12 h-12 text-blue-600' }) {
    // This object maps the simple string name to the actual icon component.
    // It's a cleaner way to handle this than a giant 'switch' statement.
    const iconMap = {
        'wrench-screwdriver': WrenchScrewdriverIcon,
        'building-office': BuildingOffice2Icon,
        'clipboard-document-list': ClipboardDocumentListIcon,
        'chart-pie': ChartPieIcon,
        'user-group': UserGroupIcon,
        'shield-check': ShieldCheckIcon,
    };

    const SelectedIcon = iconMap[name];

    // If the name exists in our map, render the icon.
    // Otherwise, render nothing (or a default icon if you prefer).
    return SelectedIcon ? <SelectedIcon className={className} /> : null;
}