const Icons: {
  [key: string]: JSX.Element;
} = {
  youtube: (
    <svg
      width="28"
      height="25"
      viewBox="0 0 28 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="fa6-brands:youtube">
        <path
          id="Vector"
          d="M26.7194 6.05874C26.414 4.90396 25.5144 3.99448 24.3722 3.68584C22.3019 3.125 14 3.125 14 3.125C14 3.125 5.69821 3.125 3.62781 3.68584C2.4856 3.99453 1.586 4.90396 1.28067 6.05874C0.725922 8.15186 0.725922 12.5189 0.725922 12.5189C0.725922 12.5189 0.725922 16.886 1.28067 18.9792C1.586 20.1339 2.4856 21.0055 3.62781 21.3142C5.69821 21.875 14 21.875 14 21.875C14 21.875 22.3018 21.875 24.3722 21.3142C25.5144 21.0055 26.414 20.1339 26.7194 18.9792C27.2741 16.886 27.2741 12.5189 27.2741 12.5189C27.2741 12.5189 27.2741 8.15186 26.7194 6.05874ZM11.2848 16.4839V8.55395L18.2235 12.519L11.2848 16.4839Z"
          fill="white"
        />
      </g>
    </svg>
  ),
  tiktok: (
    <svg
      fill="#FFFFFF"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 72 72"
      width="64px"
      height="64px"
    >
      <path d="M 29.5 14 C 15.125 14 14 15.125 14 29.5 L 14 42.5 C 14 56.875 15.125 58 29.5 58 L 42.5 58 C 56.875 58 58 56.875 58 42.5 L 58 29.5 C 58 15.125 56.875 14 42.5 14 L 29.5 14 z M 26 22 L 46 22 C 49.71 22 50 22.29 50 26 L 50 46 C 50 49.71 49.71 50 46 50 L 26 50 C 22.29 50 22 49.71 22 46 L 22 26 C 22 22.29 22.29 22 26 22 z M 36.589844 24.972656 L 36.589844 39.966797 C 36.589844 42.027797 34.797719 43.09375 33.511719 43.09375 C 32.542719 43.09375 30.337891 42.332406 30.337891 39.941406 C 30.337891 37.432406 32.395156 36.792969 33.535156 36.792969 C 34.199156 36.792969 34.458984 36.933594 34.458984 36.933594 L 34.458984 32.933594 C 34.458984 32.933594 33.961578 32.859375 33.392578 32.859375 C 29.310578 32.859375 26.404297 36.164359 26.404297 39.943359 C 26.404297 43.136359 28.902844 47.001953 33.464844 47.001953 C 38.323844 47.001953 40.546875 42.949797 40.546875 39.966797 L 40.546875 32.529297 C 40.546875 32.529297 42.712234 34.044922 45.615234 34.044922 L 45.615234 30.255859 C 42.285234 30.018859 40.504859 27.780656 40.380859 24.972656 L 36.589844 24.972656 z" />
    </svg>
  ),
  npm: (
    <svg
      width="35px"
      height="15px"
      viewBox="0 0 256 100"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMinYMin meet"
    >
      <path d="M0 0v85.498h71.166V99.83H128V85.498h128V0H0z" fill="#CB3837" />
      <path
        d="M42.502 14.332h-28.17v56.834h28.17V28.664h14.332v42.502h14.332V14.332H42.502zM85.498 14.332v71.166h28.664V71.166h28.17V14.332H85.498zM128 56.834h-13.838v-28.17H128v28.17zM184.834 14.332h-28.17v56.834h28.17V28.664h14.332v42.502h14.332V28.664h14.332v42.502h14.332V14.332h-57.328z"
        fill="#FFF"
      />
    </svg>
  ),
  dribble: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 32 32"
      width="32px"
      height="32px"
    >
      <path d="M 16 4 C 9.382813 4 4 9.382813 4 16 C 4 22.617188 9.382813 28 16 28 C 22.617188 28 28 22.617188 28 16 C 28 9.382813 22.617188 4 16 4 Z M 16 6 C 18.535156 6 20.832031 6.953125 22.59375 8.5 C 22.40625 8.761719 22.152344 9.078125 21.75 9.46875 C 20.894531 10.296875 19.527344 11.292969 17.4375 12.0625 C 16.023438 9.449219 14.636719 7.484375 13.71875 6.25 C 14.449219 6.082031 15.214844 6 16 6 Z M 11.75 6.9375 C 12.570313 8.011719 14.03125 10.003906 15.5 12.65625 C 11.433594 13.734375 7.703125 13.871094 6.21875 13.875 C 6.882813 10.785156 8.960938 8.242188 11.75 6.9375 Z M 23.96875 9.96875 C 25.1875 11.582031 25.945313 13.578125 26 15.75 C 25.109375 15.550781 23.796875 15.355469 22.09375 15.34375 C 21.207031 15.339844 20.203125 15.402344 19.125 15.53125 C 18.875 14.960938 18.605469 14.410156 18.34375 13.875 C 20.585938 13.015625 22.113281 11.882813 23.125 10.90625 C 23.46875 10.570313 23.738281 10.261719 23.96875 9.96875 Z M 16.40625 14.46875 C 16.636719 14.933594 16.871094 15.410156 17.09375 15.90625 C 12.820313 17.089844 9.75 20.714844 8.4375 22.53125 C 6.925781 20.78125 6 18.5 6 16 C 6 15.957031 6 15.917969 6 15.875 C 7.351563 15.890625 11.648438 15.796875 16.40625 14.46875 Z M 22.09375 17.3125 C 23.878906 17.3125 25.113281 17.5625 25.84375 17.75 C 25.378906 20.414063 23.875 22.699219 21.75 24.1875 C 21.351563 21.796875 20.695313 19.523438 19.90625 17.4375 C 20.695313 17.359375 21.441406 17.3125 22.09375 17.3125 Z M 17.875 17.78125 C 18.773438 20.0625 19.527344 22.566406 19.90625 25.21875 C 18.710938 25.722656 17.382813 26 16 26 C 13.707031 26 11.589844 25.230469 9.90625 23.9375 C 10.933594 22.53125 13.953125 18.789063 17.875 17.78125 Z" />
    </svg>
  ),

  github: (
    <svg
      width="25"
      height="26"
      viewBox="0 0 25 26"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="fa6-brands:github">
        <path
          id="Vector"
          d="M8.36417 20.1805C8.36417 20.282 8.24831 20.3633 8.10222 20.3633C7.93598 20.3785 7.82012 20.2973 7.82012 20.1805C7.82012 20.0789 7.93598 19.9977 8.08207 19.9977C8.23319 19.9824 8.36417 20.0637 8.36417 20.1805ZM6.7975 19.952C6.76223 20.0535 6.86298 20.1703 7.01411 20.2008C7.14509 20.2516 7.29621 20.2008 7.32644 20.0992C7.35666 19.9977 7.26095 19.8809 7.10982 19.8352C6.97885 19.7996 6.83276 19.8504 6.7975 19.952ZM9.02409 19.8656C8.878 19.9012 8.77725 19.9977 8.79236 20.1145C8.80747 20.216 8.93845 20.282 9.08958 20.2465C9.23566 20.2109 9.33641 20.1145 9.3213 20.0129C9.30619 19.9164 9.17018 19.8504 9.02409 19.8656ZM12.3388 0.40625C5.35172 0.40625 0.00689697 5.75352 0.00689697 12.7969C0.00689697 18.4285 3.5231 23.2477 8.54552 24.9438C9.19033 25.0605 9.41702 24.6594 9.41702 24.3293C9.41702 24.0145 9.4019 22.2777 9.4019 21.2113C9.4019 21.2113 5.87563 21.973 5.13511 19.698C5.13511 19.698 4.56083 18.2203 3.73467 17.8395C3.73467 17.8395 2.58108 17.0422 3.81527 17.0574C3.81527 17.0574 5.06962 17.159 5.75976 18.3676C6.86298 20.3277 8.71176 19.7641 9.43213 19.4289C9.54799 18.6164 9.87543 18.0527 10.2381 17.7176C7.42215 17.4027 4.58098 16.9914 4.58098 12.1062C4.58098 10.7098 4.96383 10.009 5.76984 9.11523C5.63886 8.78516 5.21067 7.42422 5.90082 5.66719C6.95366 5.33711 9.37672 7.03828 9.37672 7.03828C10.3842 6.75391 11.4673 6.60664 12.5403 6.60664C13.6133 6.60664 14.6964 6.75391 15.7039 7.03828C15.7039 7.03828 18.1269 5.33203 19.1798 5.66719C19.8699 7.4293 19.4417 8.78516 19.3107 9.11523C20.1167 10.0141 20.6104 10.7148 20.6104 12.1062C20.6104 17.0066 17.6433 17.3977 14.8273 17.7176C15.2908 18.1187 15.6837 18.8805 15.6837 20.0738C15.6837 21.7852 15.6686 23.9027 15.6686 24.3191C15.6686 24.6492 15.9003 25.0504 16.5401 24.9336C21.5776 23.2477 24.9931 18.4285 24.9931 12.7969C24.9931 5.75352 19.3259 0.40625 12.3388 0.40625ZM4.90338 17.9207C4.83789 17.9715 4.85301 18.0883 4.93865 18.1848C5.01925 18.266 5.13511 18.3016 5.2006 18.2355C5.26609 18.1848 5.25097 18.068 5.16533 17.9715C5.08473 17.8902 4.96887 17.8547 4.90338 17.9207ZM4.35933 17.5094C4.32407 17.5754 4.37444 17.6566 4.47519 17.7074C4.55579 17.7582 4.65654 17.743 4.69181 17.6719C4.72707 17.6059 4.67669 17.5246 4.57594 17.4738C4.47519 17.4434 4.39459 17.4586 4.35933 17.5094ZM5.99149 19.3172C5.91089 19.3832 5.94112 19.5355 6.05698 19.632C6.17284 19.7488 6.31893 19.7641 6.38442 19.6828C6.44991 19.6168 6.41968 19.4645 6.31893 19.368C6.2081 19.2512 6.05698 19.2359 5.99149 19.3172ZM5.41721 18.5707C5.33661 18.6215 5.33661 18.7535 5.41721 18.8703C5.49781 18.9871 5.63383 19.0379 5.69931 18.9871C5.77991 18.9211 5.77991 18.7891 5.69931 18.6723C5.62879 18.5555 5.49781 18.5047 5.41721 18.5707Z"
          fill="white"
        />
      </g>
    </svg>
  ),
};

const Icon = ({ type, color = "#fff" }: { type: string; color?: string }) => {
  return (
    <div
      style={{
        backgroundColor: color,
      }}
      className={`w-10 h-10 flex items-center justify-center rounded-lg shadow-grid shrink-0`}
    >
      {Icons[type]}
    </div>
  );
};

export default Icon;