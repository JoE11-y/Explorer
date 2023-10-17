import { LucideProps } from "lucide-react";

export const Icons = {
  Close: (props: LucideProps) => (
    <svg
      {...props}
      fill="none"
      height="20"
      viewBox="0 0 20 20"
      width="20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M15.625 4.375L4.375 15.625"
        stroke="#192431"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
      <path
        d="M15.625 15.625L4.375 4.375"
        stroke="#192431"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
    </svg>
  ),
  Curly: (props: LucideProps) => (
    <svg
      {...props}
      fill="none"
      height="20"
      viewBox="0 0 20 20"
      width="20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M6.25 3.125C1.25 3.125 6.25 10 1.25 10C6.25 10 1.25 16.875 6.25 16.875"
        stroke="#192431"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
      <path
        d="M13.75 3.125C18.75 3.125 13.75 10 18.75 10C13.75 10 18.75 16.875 13.75 16.875"
        stroke="#192431"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
    </svg>
  ),
  Query: (props: LucideProps) => (
    <svg
      {...props}
      fill="none"
      height="32"
      viewBox="0 0 32 32"
      width="32"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10 5C2 5 10 16 2 16C10 16 2 27 10 27"
        stroke="#192431"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
      <path
        d="M22 5C30 5 22 16 30 16C22 16 30 27 22 27"
        stroke="#192431"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
    </svg>
  ),
  Lines: (props: LucideProps) => (
    <svg
      {...props}
      fill="none"
      height="20"
      viewBox="0 0 20 20"
      width="20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M3.125 10H16.875"
        stroke="#192431"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
      <path
        d="M3.125 5H16.875"
        stroke="#192431"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
      <path
        d="M3.125 15H16.875"
        stroke="#192431"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
    </svg>
  ),
  Copy: (props: LucideProps) => (
    <svg
      {...props}
      fill="none"
      height="20"
      viewBox="0 0 20 20"
      width="20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M13.125 13.125H16.875V3.125H6.875V6.875"
        stroke="#192431"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
      <path
        d="M13.125 6.875H3.125V16.875H13.125V6.875Z"
        stroke="#192431"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
    </svg>
  ),
  Auto: (props: LucideProps) => (
    <svg
      {...props}
      fill="none"
      height="20"
      viewBox="0 0 20 20"
      width="20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M8.75 10H16.875"
        stroke="#192431"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
      <path
        d="M8.75 5H16.875"
        stroke="#192431"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
      <path
        d="M3.125 15H16.875"
        stroke="#192431"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
      <path
        d="M3.125 4.375L6.25 7.5L3.125 10.625"
        stroke="#192431"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
    </svg>
  ),
  Settings: (props: LucideProps) => (
    <svg
      {...props}
      fill="none"
      height="20"
      viewBox="0 0 20 20"
      width="20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10 13.75C12.0711 13.75 13.75 12.0711 13.75 10C13.75 7.92893 12.0711 6.25 10 6.25C7.92893 6.25 6.25 7.92893 6.25 10C6.25 12.0711 7.92893 13.75 10 13.75Z"
        stroke="#FCFEFF"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
      <path
        d="M15.422 6.30469C15.61 6.57396 15.7747 6.85886 15.9141 7.15625L17.9376 8.28125C18.1902 9.41287 18.1929 10.586 17.9454 11.7187L15.9141 12.8437C15.7747 13.1411 15.61 13.426 15.422 13.6953L15.461 16.0156C14.6035 16.7971 13.5885 17.3858 12.4845 17.7422L10.4923 16.5469C10.1646 16.5703 9.8356 16.5703 9.5079 16.5469L7.52352 17.7344C6.41595 17.3845 5.39766 16.798 4.53915 16.0156L4.57821 13.7031C4.3917 13.4301 4.22712 13.1428 4.08602 12.8437L2.06258 11.7187C1.80993 10.5871 1.80726 9.41401 2.05477 8.28125L4.08602 7.15625C4.22546 6.85886 4.39013 6.57396 4.57821 6.30469L4.53915 3.98437C5.39669 3.20294 6.41163 2.61422 7.51571 2.25781L9.5079 3.45312C9.8356 3.42968 10.1646 3.42968 10.4923 3.45312L12.4766 2.26563C13.5842 2.61554 14.6025 3.20199 15.461 3.98437L15.422 6.30469Z"
        stroke="#FCFEFF"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
    </svg>
  ),
  Home: (props: LucideProps) => (
    <svg
      {...props}
      fill="none"
      height="20"
      viewBox="0 0 20 20"
      width="20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M11.875 16.25V12.5C11.875 12.3343 11.8092 12.1753 11.6919 12.0581C11.5747 11.9409 11.4158 11.875 11.25 11.875H8.75C8.58424 11.875 8.42527 11.9409 8.30806 12.0581C8.19085 12.1753 8.125 12.3343 8.125 12.5V16.25C8.125 16.4158 8.05915 16.5748 7.94194 16.692C7.82473 16.8092 7.66576 16.875 7.5 16.875H3.75C3.58424 16.875 3.42527 16.8092 3.30806 16.692C3.19085 16.5748 3.125 16.4158 3.125 16.25V9.02348C3.1264 8.93699 3.14509 8.85165 3.17998 8.77249C3.21486 8.69332 3.26523 8.62194 3.32812 8.56255L9.57812 2.88286C9.69334 2.77745 9.84384 2.71899 10 2.71899C10.1562 2.71899 10.3067 2.77745 10.4219 2.88286L16.6719 8.56255C16.7348 8.62194 16.7851 8.69332 16.82 8.77249C16.8549 8.85165 16.8736 8.93699 16.875 9.02348V16.25C16.875 16.4158 16.8092 16.5748 16.6919 16.692C16.5747 16.8092 16.4158 16.875 16.25 16.875H12.5C12.3342 16.875 12.1753 16.8092 12.0581 16.692C11.9408 16.5748 11.875 16.4158 11.875 16.25Z"
        stroke="#192431"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
    </svg>
  ),
  Add: (props: LucideProps) => (
    <svg
      {...props}
      fill="none"
      height="20"
      viewBox="0 0 20 20"
      width="20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10 17.5C14.1421 17.5 17.5 14.1421 17.5 10C17.5 5.85786 14.1421 2.5 10 2.5C5.85786 2.5 2.5 5.85786 2.5 10C2.5 14.1421 5.85786 17.5 10 17.5Z"
        stroke="#ABAFC7"
        strokeMiterlimit="10"
        strokeWidth="1.5"
      />
      <path
        d="M6.875 10H13.125"
        stroke="#ABAFC7"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
      <path
        d="M10 6.875V13.125"
        stroke="#ABAFC7"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
    </svg>
  ),
  DB: (props: LucideProps) => (
    <svg
      {...props}
      fill="none"
      height="20"
      viewBox="0 0 20 20"
      width="20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M3.125 10V13.75C3.125 15.8203 6.20313 17.5 10 17.5C13.7969 17.5 16.875 15.8203 16.875 13.75V10"
        stroke="#192431"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
      <path
        d="M3.125 6.25V10C3.125 12.0703 6.20313 13.75 10 13.75C13.7969 13.75 16.875 12.0703 16.875 10V6.25"
        stroke="#192431"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
      <path
        d="M10 10C13.797 10 16.875 8.32107 16.875 6.25C16.875 4.17893 13.797 2.5 10 2.5C6.20304 2.5 3.125 4.17893 3.125 6.25C3.125 8.32107 6.20304 10 10 10Z"
        stroke="#192431"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
    </svg>
  ),
  SearchBar: (props: LucideProps) => (
    <svg
      {...props}
      fill="none"
      height="16"
      viewBox="0 0 16 16"
      width="16"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M7.25 12.5C10.1495 12.5 12.5 10.1495 12.5 7.25C12.5 4.35051 10.1495 2 7.25 2C4.35051 2 2 4.35051 2 7.25C2 10.1495 4.35051 12.5 7.25 12.5Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
      <path
        d="M10.9624 10.9624L13.9999 13.9999"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
    </svg>
  ),
  Logo: (props: LucideProps) => (
    <svg
      {...props}
      width="27"
      height="20"
      viewBox="0 0 27 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0.271136 8.24108L8.02875 0.276477C8.20117 0.0994519 8.43503 0 8.67888 0H25.3287C26.1479 0 26.5581 1.01677 25.9789 1.61143L18.2213 9.57603C18.0488 9.75306 17.815 9.85251 17.5711 9.85251H0.921265C0.102148 9.85251 -0.308067 8.83574 0.271136 8.24108Z"
        fill="#FCFEFF"
      />
      <path
        d="M17.5711 14.8083H0.921265C0.102148 14.8083 -0.308068 13.7915 0.271135 13.1968L1.47788 11.9579C1.6503 11.7809 1.88416 11.6814 2.128 11.6814H17.5711C17.815 11.6814 18.0488 11.582 18.2213 11.4049L24.0037 5.46822C24.1761 5.29119 24.41 5.19174 24.6538 5.19174H25.0989C25.918 5.19174 26.3282 6.20851 25.749 6.80317L18.2213 14.5318C18.0488 14.7088 17.815 14.8083 17.5711 14.8083Z"
        fill="#FCFEFF"
      />
      <path
        d="M17.5711 20H0.921265C0.102148 20 -0.308068 18.9832 0.271135 18.3886L1.47788 17.1496C1.6503 16.9726 1.88416 16.8732 2.128 16.8732H17.5711C17.815 16.8732 18.0488 16.7737 18.2213 16.5967L24.0037 10.66C24.1761 10.4829 24.41 10.3835 24.6538 10.3835H25.0989C25.918 10.3835 26.3282 11.4003 25.749 11.9949L18.2213 19.7235C18.0488 19.9005 17.815 20 17.5711 20Z"
        fill="#FCFEFF"
      />
    </svg>
  ),
  triangle: (props: LucideProps) => (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
    >
      <path
        fill="currentColor"
        d="M8 6a1 1 0 0 1 1.6-.8l8 6a1 1 0 0 1 0 1.6l-8 6A1 1 0 0 1 8 18V6Z"
      />
    </svg>
  ),
  Folder: (props: LucideProps) => (
    <svg
      {...props}
      fill="none"
      height="20"
      viewBox="0 0 20 20"
      width="20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M16.9453 16.25H3.07813C3.0022 16.25 2.92703 16.235 2.85689 16.206C2.78674 16.1769 2.72301 16.1344 2.66933 16.0807C2.61564 16.027 2.57306 15.9633 2.54401 15.8931C2.51495 15.823 2.5 15.7478 2.5 15.6719V6.25H16.875C17.0408 6.25 17.1997 6.31585 17.3169 6.43306C17.4342 6.55027 17.5 6.70924 17.5 6.875V15.6953C17.5 15.8424 17.4416 15.9835 17.3375 16.0875C17.2335 16.1916 17.0924 16.25 16.9453 16.25Z"
        stroke="#192431"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
      <path
        d="M2.5 6.25V4.375C2.5 4.20924 2.56585 4.05027 2.68306 3.93306C2.80027 3.81585 2.95924 3.75 3.125 3.75H7.24219C7.32334 3.74972 7.40376 3.76544 7.47883 3.79628C7.5539 3.82711 7.62216 3.87245 7.67969 3.92969L10 6.25"
        stroke="#192431"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
    </svg>
  ),
  NewDatabase: (props: LucideProps) => (
    <svg
      {...props}
      fill="none"
      height="20"
      viewBox="0 0 20 20"
      width="20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M3.125 10V13.75C3.125 15.8203 6.20313 17.5 10 17.5C13.7969 17.5 16.875 15.8203 16.875 13.75V10"
        stroke="#EC4525"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
      <path
        d="M3.125 6.25V10C3.125 12.0703 6.20313 13.75 10 13.75C13.7969 13.75 16.875 12.0703 16.875 10V6.25"
        stroke="#EC4525"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
      <path
        d="M10 10C13.797 10 16.875 8.32107 16.875 6.25C16.875 4.17893 13.797 2.5 10 2.5C6.20304 2.5 3.125 4.17893 3.125 6.25C3.125 8.32107 6.20304 10 10 10Z"
        stroke="#EC4525"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
      <path
        d="M15 19C17.2091 19 19 17.2091 19 15C19 12.7909 17.2091 11 15 11C12.7909 11 11 12.7909 11 15C11 17.2091 12.7909 19 15 19Z"
        fill="#EC4525"
        stroke="#FCFEFF"
        strokeMiterlimit="10"
        strokeWidth="0.8"
      />
      <path
        d="M15 13.3337V16.6671"
        stroke="#FCFEFF"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="0.8"
      />
      <path
        d="M13.3333 15H16.6666"
        stroke="#FCFEFF"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="0.8"
      />
    </svg>
  ),
  NewQuery: (props: LucideProps) => (
    <svg
      {...props}
      fill="none"
      height="20"
      viewBox="0 0 20 20"
      width="20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M6.25 3.125C1.25 3.125 6.25 10 1.25 10C6.25 10 1.25 16.875 6.25 16.875"
        stroke="#EC4525"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
      <path
        d="M13.75 3.125C18.75 3.125 13.75 10 18.75 10C13.75 10 18.75 16.875 13.75 16.875"
        stroke="#EC4525"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
      <path
        d="M15 19C17.2091 19 19 17.2091 19 15C19 12.7909 17.2091 11 15 11C12.7909 11 11 12.7909 11 15C11 17.2091 12.7909 19 15 19Z"
        fill="#EC4525"
        stroke="#FCFEFF"
        strokeMiterlimit="10"
        strokeWidth="0.8"
      />
      <path
        d="M15 13.3337V16.6671"
        stroke="#FCFEFF"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="0.8"
      />
      <path
        d="M13.3333 15H16.6666"
        stroke="#FCFEFF"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="0.8"
      />
    </svg>
  ),
  Template: (props: LucideProps) => (
    <svg
      {...props}
      fill="none"
      height="20"
      viewBox="0 0 20 20"
      width="20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M11.875 2.5V6.875H16.25"
        stroke="#ABAFC7"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
      <path
        d="M11.5625 10L13.4375 11.875L11.5625 13.75"
        stroke="#ABAFC7"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
      <path
        d="M8.4375 10L6.5625 11.875L8.4375 13.75"
        stroke="#ABAFC7"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
      <path
        d="M15.625 17.5C15.7908 17.5 15.9497 17.4342 16.0669 17.3169C16.1842 17.1997 16.25 17.0408 16.25 16.875V6.875L11.875 2.5H4.375C4.20924 2.5 4.05027 2.56585 3.93306 2.68306C3.81585 2.80027 3.75 2.95924 3.75 3.125V16.875C3.75 17.0408 3.81585 17.1997 3.93306 17.3169C4.05027 17.4342 4.20924 17.5 4.375 17.5H15.625Z"
        stroke="#ABAFC7"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
    </svg>
  ),
  dBIcon: (props: LucideProps) => (
    <svg
      {...props}
      fill="none"
      height="20"
      viewBox="0 0 20 20"
      width="20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M3.125 10V13.75C3.125 15.8203 6.20313 17.5 10 17.5C13.7969 17.5 16.875 15.8203 16.875 13.75V10"
        stroke={"#F1F1F1"}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
      <path
        d="M3.125 6.25V10C3.125 12.0703 6.20313 13.75 10 13.75C13.7969 13.75 16.875 12.0703 16.875 10V6.25"
        stroke={"#F1F1F1"}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
      <path
        d="M10 10C13.797 10 16.875 8.32107 16.875 6.25C16.875 4.17893 13.797 2.5 10 2.5C6.20304 2.5 3.125 4.17893 3.125 6.25C3.125 8.32107 6.20304 10 10 10Z"
        stroke={"#F1F1F1"}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
    </svg>
  ),
  curlyIcon: (props: LucideProps) => (
    <svg
      {...props}
      fill="none"
      height="32"
      viewBox="0 0 32 32"
      width="32"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10 5C2 5 10 16 2 16C10 16 2 27 10 27"
        stroke={"#F1F1F1"}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
      <path
        d="M22 5C30 5 22 16 30 16C22 16 30 27 22 27"
        stroke={"#F1F1F1"}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
    </svg>
  ),
};
