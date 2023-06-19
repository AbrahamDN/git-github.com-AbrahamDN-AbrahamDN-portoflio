"use client";

type IconProps = {
  name: string;
};

const Icon = ({ name }: IconProps) => {
  if (!name) return;
  const icons: any = {
    cv: <CVIcon />,
    github: <GithubIcon />,
    linkedin: <LinkedInIcon />,
  };

  if (!icons[name]) return;
  return icons[name];
};

const CVIcon = () => (
  <svg
    width="25"
    height="25"
    viewBox="0 0 25 25"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M12.167 16.0314C11.6891 16.7826 11.2305 17.5175 10.203 18.2314C9.65342 18.6167 8.38838 19.3694 6.59023 19.3694C3.15962 19.3694 0.390625 16.8752 0.390625 12.4903C0.390625 8.65796 2.99536 5.63062 6.66338 5.63062C8.14941 5.63062 9.46973 6.14434 10.442 6.91499C11.3412 7.63032 11.7623 8.34585 12.1297 8.98804L9.5623 10.2709C9.37861 9.84971 9.15752 9.40913 8.58999 8.93271C7.96577 8.43687 7.34292 8.29053 6.80972 8.29053C4.71885 8.29053 3.61812 10.2351 3.61812 12.3992C3.61812 15.2428 5.06831 16.6542 6.80972 16.6542C8.49736 16.6542 9.1769 15.4803 9.61606 14.7291L12.167 16.0315V16.0314ZM21.1608 6.03389H24.6094L20.1154 18.9841H16.8147L12.3761 6.03389H15.8246L18.5024 15.2429L21.1608 6.03389Z"
      fill="currentColor"
    />
  </svg>
);

const GithubIcon = () => (
  <svg
    width="21"
    height="20"
    viewBox="0 0 21 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M10.5 0C9.18678 0 7.88642 0.258658 6.67317 0.761205C5.45991 1.26375 4.35752 2.00035 3.42893 2.92893C1.55357 4.8043 0.5 7.34784 0.5 10C0.5 14.42 3.37 18.17 7.34 19.5C7.84 19.58 8 19.27 8 19V17.31C5.23 17.91 4.64 15.97 4.64 15.97C4.18 14.81 3.53 14.5 3.53 14.5C2.62 13.88 3.6 13.9 3.6 13.9C4.6 13.97 5.13 14.93 5.13 14.93C6 16.45 7.47 16 8.04 15.76C8.13 15.11 8.39 14.67 8.67 14.42C6.45 14.17 4.12 13.31 4.12 9.5C4.12 8.39 4.5 7.5 5.15 6.79C5.05 6.54 4.7 5.5 5.25 4.15C5.25 4.15 6.09 3.88 8 5.17C8.79 4.95 9.65 4.84 10.5 4.84C11.35 4.84 12.21 4.95 13 5.17C14.91 3.88 15.75 4.15 15.75 4.15C16.3 5.5 15.95 6.54 15.85 6.79C16.5 7.5 16.88 8.39 16.88 9.5C16.88 13.32 14.54 14.16 12.31 14.41C12.67 14.72 13 15.33 13 16.26V19C13 19.27 13.16 19.59 13.67 19.5C17.64 18.16 20.5 14.42 20.5 10C20.5 8.68678 20.2413 7.38642 19.7388 6.17317C19.2362 4.95991 18.4997 3.85752 17.5711 2.92893C16.6425 2.00035 15.5401 1.26375 14.3268 0.761205C13.1136 0.258658 11.8132 0 10.5 0Z"
      fill="currentColor"
    />
  </svg>
);

const LinkedInIcon = () => (
  <svg
    width="25"
    height="25"
    viewBox="0 0 25 25"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M7.43994 5.51553C7.43968 6.04596 7.22871 6.55456 6.85345 6.92945C6.47819 7.30433 5.96937 7.51479 5.43894 7.51453C4.90851 7.51426 4.39991 7.30329 4.02502 6.92803C3.65014 6.55277 3.43968 6.04396 3.43994 5.51353C3.44021 4.98309 3.65117 4.47449 4.02644 4.09961C4.4017 3.72472 4.91051 3.51426 5.44094 3.51453C5.97137 3.51479 6.47998 3.72576 6.85486 4.10102C7.22975 4.47628 7.44021 4.98509 7.43994 5.51553ZM7.49994 8.99553H3.49994V21.5155H7.49994V8.99553ZM13.8199 8.99553H9.83994V21.5155H13.7799V14.9455C13.7799 11.2855 18.5499 10.9455 18.5499 14.9455V21.5155H22.4999V13.5855C22.4999 7.41553 15.4399 7.64553 13.7799 10.6755L13.8199 8.99553Z"
      fill="currentColor"
    />
  </svg>
);

export { CVIcon, GithubIcon, LinkedInIcon };
export default Icon;
