import css from '../components/header/header.module.scss';

export const Logo = () => {
  return (
    <svg
      enableBackground="new 0 0 64 64"
      version="1.1"
      viewBox="0 0 64 64"
      xmlns="http://www.w3.org/2000/svg"
      className={css.header_logo}
    >
      <circle cx="32" cy="32" className={css.logo_circle} r="32" />
      <g opacity="0.2">
        <path className={css.logo_shadow}
          d="M19,35c3.308,0,6,2.692,6,6s-2.692,6-6,6s-6-2.692-6-6S15.692,35,19,35 M19,32c-4.971,0-9,4.029-9,9   s4.029,9,9,9s9-4.029,9-9S23.971,32,19,32L19,32z"
        />
      </g>
      <g opacity="0.2">
        <path className={css.logo_shadow}
          d="M46,35c3.308,0,6,2.692,6,6s-2.692,6-6,6s-6-2.692-6-6S42.692,35,46,35 M46,32c-4.971,0-9,4.029-9,9   s4.029,9,9,9s9-4.029,9-9S50.971,32,46,32L46,32z"
        />
      </g>
      <g opacity="0.2">
        <path className={css.logo_shadow}
          d="M32.5,44.498c-0.828,0-1.5-0.671-1.5-1.5V35.7l-8.229-7.933c-0.29-0.28-0.455-0.664-0.459-1.066   c-0.004-0.402,0.154-0.79,0.439-1.074l5.188-5.188c0.567-0.569,1.485-0.589,2.078-0.042L36.087,26H39c0.828,0,1.5,0.671,1.5,1.5   S39.828,29,39,29h-3.5c-0.377,0-0.74-0.142-1.018-0.398l-5.44-5.022l-3.089,3.088l7.588,7.314C33.834,34.265,34,34.655,34,35.062   v7.936C34,43.827,33.328,44.498,32.5,44.498z"
        />
      </g>
      <g opacity="0.2">
        <circle cx="34.5" cy="16.5" className={css.logo_shadow} r="3.5" />
      </g>
      <g>
        <path className={css.logo_biker}
          d="M19,33c3.308,0,6,2.692,6,6s-2.692,6-6,6s-6-2.692-6-6S15.692,33,19,33 M19,30c-4.971,0-9,4.029-9,9   s4.029,9,9,9s9-4.029,9-9S23.971,30,19,30L19,30z"
        
        />
      </g>
      <g className={css.logo_biker}>
        <path className={css.logo_biker}
          d="M46,33c3.308,0,6,2.692,6,6s-2.692,6-6,6s-6-2.692-6-6S42.692,33,46,33 M46,30c-4.971,0-9,4.029-9,9   s4.029,9,9,9s9-4.029,9-9S50.971,30,46,30L46,30z"
        
        />
      </g>
      <polyline className={css.logo_biker_polyline}
      fill='none'
        points="  32.5,40.998 32.5,33.062 23.812,24.688 29,19.5 35.5,25.5 39,25.5 "
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit="10"
        strokeWidth="3"
      />
      <circle className={css.logo_biker} cx="34.5" cy="14.5" r="3.5" />
    </svg>
  );
};
