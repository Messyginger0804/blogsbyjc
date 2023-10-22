import * as React from "react"
import { cssFunc } from '@/utils';

const Profile = ({ className, remainingProps }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={42}
        height={43}
        viewBox="0 0 42 43"
        // className={cssFunc(className, "w-full h-auto")}
        className={cssFunc(className, "w-[3rem] h-[3.3rem]")}
        {...remainingProps}

    >
        <title>{"profile_minus [#1340]"}</title>
        <path
            // fill="#000"
            // fillRule="nonzero"
            // fillRule="inherit"
            fillRule="evenodd"
            d="M14 6c0-2.206-1.794-4-4-4S6 3.794 6 6s1.794 4 4 4 4-1.794 4-4Zm6 14h-5v-2h2.784c-.826-3.786-3.999-6-7.784-6-3.785 0-6.958 2.214-7.784 6H5v2H0c0-4.555 2.583-7.952 6.242-9.327A5.983 5.983 0 0 1 4 6a6 6 0 1 1 9.758 4.673C17.417 12.048 20 15.445 20 20ZM7 20h6v-2H7v2Z"
        />
    </svg>
)
export default Profile