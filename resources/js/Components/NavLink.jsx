// import { Link } from '@inertiajs/react';

// export default function NavLink({
//     active = false,
//     className = '',
//     children,
//     ...props
// }) {
//     return (
//         <Link
//             {...props}
//             className={
//                 'inline-flex items-center border-b-2 px-1 pt-1 text-sm font-medium leading-5 transition duration-150 ease-in-out focus:outline-none ' +
//                 (active
//                     ? 'border-indigo-400 text-gray-900 focus:border-indigo-700'
//                     : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 focus:border-gray-300 focus:text-gray-700') +
//                 className
//             }
//         >
//             {children}
//         </Link>
//     );
// }


// resources/js/Components/NavLink.jsx
import { Link, usePage } from '@inertiajs/react';

export default function NavLink({ href, children, ...props }) {
    const { url } = usePage();
    const isActive = url === href;

    return (
        <Link
            href={href}
            className={`py-2 transition duration-300 ${
                isActive
                    ? 'text-blue-600 font-semibold border-b-2 border-blue-600'
                    : 'text-gray-600 border-b-2 border-transparent hover:text-blue-600'
            }`}
            {...props}
        >
            {children}
        </Link>
    );
}