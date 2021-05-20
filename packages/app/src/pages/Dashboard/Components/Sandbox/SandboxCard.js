import {
  Button,
} from 'react-bootstrap';

const IconMore = (props) => {
  return (
    <svg
      viewBox="0 0 16 16"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9.55556 1.77778C9.55556 2.75962 8.75962 3.55556 7.77778 3.55556C6.79594 3.55556 6 2.75962 6 1.77778C6 0.795938 6.79594 0 7.77778 0C8.75962 0 9.55556 0.795938 9.55556 1.77778ZM9.55556 8C9.55556 8.98184 8.75962 9.77778 7.77778 9.77778C6.79594 9.77778 6 8.98184 6 8C6 7.01816 6.79594 6.22223 7.77778 6.22223C8.75962 6.22223 9.55556 7.01816 9.55556 8ZM7.77778 16C8.75962 16 9.55556 15.2041 9.55556 14.2222C9.55556 13.2404 8.75962 12.4444 7.77778 12.4444C6.79594 12.4444 6 13.2404 6 14.2222C6 15.2041 6.79594 16 7.77778 16Z"
        fill="currentColor"
      />
    </svg>
  );
};

const IconEye = (props) => {
  return (
    <svg
      viewBox="0 0 16 16"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g fill="currentColor">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M16 7.6C16 9.2 11.0928 13.2 8 13.2C4.90721 13.2 0 8.8 0 7.6C0 6 4.90721 2 8 2C11.0928 2 16 6 16 7.6ZM11.2 7.6C11.2 9.36731 9.76731 10.8 8 10.8C6.23269 10.8 4.8 9.36731 4.8 7.6C4.8 5.83269 6.23269 4.4 8 4.4C9.76731 4.4 11.2 5.83269 11.2 7.6ZM8 9.2C8.88366 9.2 9.6 8.48366 9.6 7.6C9.6 6.71634 8.88366 6 8 6C7.11634 6 6.4 6.71634 6.4 7.6C6.4 8.48366 7.11634 9.2 8 9.2Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
};

const IconTemplate = (props) => {
  return (
    <svg
      viewBox="0 0 32 32"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M26.3104 10.978C25.9785 10.8637 25.6345 10.7556 25.2803 10.6533C25.3385 10.4158 25.3919 10.1813 25.4395 9.95075C26.2192 6.16561 25.7094 3.11628 23.9684 2.11231C22.299 1.14964 19.5689 2.15338 16.8116 4.55297C16.5465 4.78372 16.2806 5.02802 16.0148 5.28405C15.8377 5.11465 15.6609 4.95095 15.4846 4.79437C12.5948 2.22857 9.69833 1.1473 7.95907 2.15418C6.2913 3.11964 5.7974 5.9863 6.49931 9.5735C6.5671 9.91999 6.64633 10.2738 6.73592 10.6336C6.32599 10.7499 5.93023 10.874 5.55156 11.006C2.16367 12.1871 0 14.0383 0 15.9585C0 17.9417 2.3227 19.9308 5.85146 21.1369C6.12993 21.2321 6.41889 21.3221 6.71667 21.4075C6.62001 21.7966 6.53594 22.1779 6.46537 22.5498C5.79609 26.0747 6.31875 28.8737 7.98209 29.8331C9.70016 30.8238 12.5836 29.8054 15.3913 27.3512C15.6132 27.1572 15.8359 26.9514 16.059 26.7358C16.3482 27.0142 16.6369 27.2778 16.9241 27.525C19.6437 29.8653 22.3297 30.8103 23.9915 29.8483C25.7079 28.8547 26.2657 25.8479 25.5415 22.1898C25.4862 21.9104 25.4219 21.625 25.3496 21.3345C25.5521 21.2746 25.7509 21.2128 25.9447 21.1485C29.6132 19.9331 32 17.9681 32 15.9585C32 14.0314 29.7666 12.1677 26.3104 10.978ZM25.5148 19.8509C25.3398 19.9089 25.1602 19.9649 24.9773 20.0191C24.5723 18.737 24.0257 17.3737 23.3568 15.9652C23.9951 14.5902 24.5206 13.2443 24.9142 11.9705C25.2416 12.0652 25.5593 12.1651 25.8655 12.2705C28.8267 13.2899 30.633 14.7972 30.633 15.9585C30.633 17.1955 28.6822 18.8014 25.5148 19.8509ZM24.2005 22.4553C24.5207 24.0728 24.5664 25.5353 24.3543 26.6786C24.1637 27.706 23.7804 28.3909 23.3065 28.6652C22.2981 29.2489 20.1415 28.4902 17.8156 26.4887C17.549 26.2593 17.2805 26.0143 17.011 25.755C17.9127 24.7689 18.8139 23.6225 19.6934 22.3492C21.2403 22.212 22.7019 21.9876 24.0273 21.6812C24.0925 21.9445 24.1505 22.2027 24.2005 22.4553ZM10.9095 28.5643C9.92424 28.9123 9.1395 28.9223 8.66514 28.6488C7.65576 28.0666 7.23614 25.8193 7.80853 22.8048C7.87409 22.4595 7.95213 22.1049 8.04206 21.7424C9.35293 22.0323 10.8037 22.2409 12.3544 22.3666C13.2399 23.6124 14.167 24.7576 15.1014 25.7603C14.8973 25.9574 14.6939 26.145 14.4917 26.3218C13.2502 27.4071 12.006 28.1771 10.9095 28.5643ZM6.29358 19.8434C4.73323 19.3101 3.44463 18.6169 2.56136 17.8605C1.76768 17.1809 1.36697 16.5061 1.36697 15.9585C1.36697 14.7933 3.10418 13.307 6.00154 12.2969C6.3531 12.1743 6.72112 12.0588 7.10303 11.9503C7.50346 13.2528 8.02874 14.6147 8.66264 15.9918C8.02053 17.3893 7.48779 18.7729 7.08344 20.0907C6.81117 20.0124 6.54739 19.9301 6.29358 19.8434ZM7.84088 9.31098C7.2395 6.23755 7.6389 3.91907 8.64396 3.33728C9.71451 2.71751 12.0818 3.60118 14.5769 5.81662C14.7364 5.95822 14.8965 6.10643 15.057 6.25977C14.1273 7.2581 13.2086 8.39467 12.331 9.6332C10.826 9.77269 9.3854 9.99677 8.06086 10.2968C7.97759 9.96185 7.90382 9.63274 7.84088 9.31098ZM21.6442 12.7194C21.3276 12.1725 21.0025 11.6385 20.6711 11.119C21.6921 11.2481 22.6704 11.4194 23.589 11.6291C23.3132 12.513 22.9695 13.4372 22.5648 14.3846C22.2746 13.8335 21.9675 13.2779 21.6442 12.7194ZM16.0153 7.23674C16.6458 7.91985 17.2773 8.68254 17.8983 9.51005C17.2725 9.48049 16.6389 9.46511 16 9.46511C15.3672 9.46511 14.7382 9.48015 14.1162 9.5092C14.7379 8.68938 15.3749 7.92771 16.0153 7.23674ZM10.3502 12.7288C10.0339 13.2773 9.73263 13.8299 9.44692 14.3836C9.04883 13.4395 8.70826 12.5111 8.43007 11.6146C9.34308 11.4103 10.3167 11.2433 11.3312 11.1167C10.9951 11.6409 10.6674 12.1788 10.3502 12.7287V12.7288ZM11.3604 20.8979C10.3122 20.7809 9.324 20.6225 8.41122 20.4238C8.69385 19.5114 9.04193 18.5631 9.44845 17.5987C9.7349 18.152 10.0374 18.7048 10.3556 19.2545H10.3557C10.6799 19.8144 11.0157 20.363 11.3604 20.8979ZM16.0531 24.7766C15.4052 24.0776 14.7589 23.3043 14.1277 22.4725C14.7405 22.4965 15.3651 22.5089 16 22.5089C16.6522 22.5089 17.297 22.4942 17.9317 22.4659C17.3085 23.3127 16.6794 24.0871 16.0531 24.7766ZM22.5779 17.5496C23.0056 18.5244 23.3661 19.4677 23.6524 20.3645C22.7246 20.5762 21.7228 20.7467 20.6674 20.8734C20.9996 20.3469 21.3275 19.8038 21.6497 19.2451C21.9757 18.6798 22.2852 18.1137 22.5779 17.5496ZM20.4656 18.5621C19.9654 19.4294 19.4518 20.2574 18.9305 21.039C17.9809 21.1068 16.9999 21.1418 16 21.1418C15.0042 21.1418 14.0355 21.1109 13.1028 21.0503C12.5604 20.2585 12.0357 19.4281 11.5386 18.5696H11.5388C11.043 17.7134 10.5868 16.8499 10.1734 15.9913C10.5867 15.1307 11.0417 14.2663 11.5346 13.4116L11.5345 13.4118C12.0287 12.5548 12.5488 11.7285 13.0861 10.9416C14.0378 10.8697 15.0137 10.8321 15.9999 10.8321H16C16.9907 10.8321 17.9678 10.87 18.9192 10.9425C19.4484 11.7236 19.965 12.5473 20.4611 13.4044C20.9628 14.2711 21.4237 15.1297 21.8406 15.9719C21.425 16.8285 20.9651 17.6958 20.4656 18.5621ZM23.2856 3.29662C24.3572 3.91457 24.7739 6.40678 24.1006 9.67483C24.0577 9.88336 24.0093 10.0958 23.9568 10.311C22.6292 10.0047 21.1875 9.77673 19.6782 9.63513C18.7989 8.38299 17.8877 7.24465 16.9731 6.25914C17.219 6.02259 17.4645 5.79703 17.7091 5.58417C20.0715 3.52821 22.2796 2.71648 23.2856 3.29662ZM16 13.101C17.5781 13.101 18.8575 14.3803 18.8575 15.9585C18.8575 17.5366 17.5781 18.816 16 18.816C14.4219 18.816 13.1425 17.5366 13.1425 15.9585C13.1425 14.3803 14.4219 13.101 16 13.101Z"
        fill="#00D8FF"
      />
    </svg>
  );
};

const SandboxCard = ({ sandbox: { name, id }}) => {
  return (
    <div className="w-100 h-100 p-0">
      <div className="d-flex flex-column w-100 h-100 sandbox-card">
        <a href={`#/sandbox/${id.length <= 10 ? "ls" : "s"}/${id}`}>
          <div className="d-flex sandbox-thumbnail bg-light rounded-top">
          </div>
        </a>
        <div className="sandbox-template-icon">
          <IconTemplate width={16} height={16}/>
        </div>
        <div className="d-flex flex-column flex-grow-1 justify-content-around">
          <div className="d-flex flex-row justify-content-between mx-3 sandbox-title">
            <a href={`#/sandbox/${id.length <= 10 ? "ls" : "s"}/${id}`}>
              <span>{ name }</span>
            </a>
            <Button
              size="sm"
              className="btn-transparent btn-sandbox bg-transparent border-0 border-sandbox rounded-circle"
            >
              <IconMore width={9} height={9}/>
            </Button>
          </div>
          <div className="d-flex mx-3 text-sm sandbox-stat">
            <span className="d-flex flex-row small">
              <div className="d-flex flex-row justify-content-center align-items-center mr-2 stat-item">
                <IconEye width={15} height={15} viewBox="0 -1 16 16" className="h-100 mr-1 d-flex"/>
                { 2 }
              </div>
              <span className="mr-2 stat-item">18h ago</span>
              <span className="stat-item">Drafs</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SandboxCard;
