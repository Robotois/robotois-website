import React from 'react';

const withColor = (fill, hover) => SVGComponent =>
  props => (
    <SVGComponent style={{ fill, hover }} {...props} />
  );

const Icon = props => (
  <svg
    {...props}
    // style={{ maxHeight: '3rem', color: 'white' }}
    width="52px"
    height="82px"
    viewBox="0 0 52 82"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
  >
    <title>Page 1</title>
    <desc>Created with Sketch.</desc>
    <defs></defs>
    <g id="Welcome" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
        <g id="Landing-Page" transform="translate(-120.000000, -61.000000)" fill="#FFFFFF">
            <g id="Page-1" transform="translate(120.000000, 60.000000)">
                <g id="Group-5" transform="translate(0.000000, 0.773050)">
                    <path d="M28.3570607,11.2765957 L28.3342742,11.2765957 L27.5718022,17.6737589 L30.3821393,17.6737589 L30.3821393,11.5918014 C33.3034876,11.4528085 35.6802966,8.96896454 35.6802966,5.91635461 C35.6802966,2.7741844 33.0458247,0.226950355 29.8890157,0.226950355 C26.7322067,0.226950355 24.1357124,2.7067234 24.1357124,5.84831206 C24.1357124,8.48859574 25.907218,10.6950355 28.3570607,11.2765957" id="Fill-1"></path>
                    <path d="M25.8938966,71.2829163 C18.1038292,71.2829163 11.7656719,64.7799092 11.7656719,57.2196255 L17.6083685,57.2196255 C17.6083685,61.8721078 21.3254921,65.4673135 25.8938966,65.4673135 C30.4623011,65.4673135 34.180009,61.8721078 34.180009,57.2196255 L40.0227056,57.2196255 C40.0227056,64.7799092 33.6845483,71.2829163 25.8938966,71.2829163 M26.0972225,31.4373135 C31.5408629,31.4373135 35.9538517,35.8298383 35.9538517,41.2482355 C35.9538517,46.6666326 31.5408629,51.0591574 26.0972225,51.0591574 C20.653582,51.0591574 16.2411775,46.6666326 16.2411775,41.2482355 C16.2411775,35.8298383 20.653582,31.4373135 26.0972225,31.4373135 M47.5930876,19.9997674 L4.40679551,19.9997674 C1.97272809,19.9997674 0.000233707865,21.9636965 0.000233707865,24.3864766 L0.000233707865,77.8405901 C0.000233707865,80.2633702 1.97272809,82.2267177 4.40679551,82.2267177 L47.5930876,82.2267177 C50.0271551,82.2267177 52.0002337,80.2633702 52.0002337,77.8405901 L52.0002337,24.3864766 C52.0002337,21.9636965 50.0271551,19.9997674 47.5930876,19.9997674" id="Fill-3"></path>
                </g>
            </g>
        </g>
    </g>
  </svg>
);

const ColoredIcon = withColor('#ffffff', '#5764C6')(Icon);

export default Icon;
