import React from 'react'

export const Select = ({ options }) => {
  return (
    <button className="text-black dark:text-white w-full text-left leading-10 flex flex-row items-center justify-between rounded-lg px-4 focus:outline-none focus:ring-4 focus:ring-blue-500 focus:ring-opacity-50 border border-gray-200">
      <span>Latest</span>
      <svg className="text-black dark:text-white fill-current" width="11" height="8" viewBox="0 0 11 8" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" clipRule="evenodd" d="M0.292787 1.29925C0.480314 1.11177 0.734622 1.00646 0.999786 1.00646C1.26495 1.00646 1.51926 1.11177 1.70679 1.29925L4.99979 4.59225L8.29279 1.29925C8.38503 1.20374 8.49538 1.12755 8.61738 1.07514C8.73939 1.02274 8.87061 0.995149 9.00339 0.993995C9.13616 0.992841 9.26784 1.01814 9.39074 1.06842C9.51364 1.1187 9.62529 1.19296 9.71918 1.28685C9.81307 1.38074 9.88733 1.4924 9.93761 1.61529C9.98789 1.73819 10.0132 1.86987 10.012 2.00265C10.0109 2.13543 9.9833 2.26665 9.93089 2.38865C9.87848 2.51065 9.8023 2.621 9.70679 2.71325L5.70679 6.71325C5.51926 6.90072 5.26495 7.00603 4.99979 7.00603C4.73462 7.00603 4.48031 6.90072 4.29279 6.71325L0.292787 2.71325C0.105316 2.52572 0 2.27141 0 2.00625C0 1.74108 0.105316 1.48677 0.292787 1.29925Z"/>
      </svg>
    </button>
  )
}
