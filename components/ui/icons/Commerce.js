import React from "react";

const Commerce = (props) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M23.9563 5.72916L22.242 0.586305C22.1254 0.236099 21.7977 -0.000100414 21.4286 3.20245e-08H2.57143C2.20234 -0.000100414 1.87463 0.236099 1.75802 0.586305L0.0436943 5.72916C0.0172768 5.80921 0.00251116 5.89264 0 5.97686C0 5.98545 0 5.99142 0 6.00001V6.85717C0.00311384 8.20014 0.638187 9.46335 1.71427 10.2669C1.71427 10.2738 1.71427 10.2789 1.71427 10.2857V21.4286C1.71427 22.8487 2.86554 24 4.2857 24H19.7143C21.1345 24 22.2857 22.8487 22.2857 21.4286V10.2857C22.2857 10.2788 22.2857 10.2737 22.2857 10.2669C23.3618 9.46335 23.9969 8.20014 24 6.85717V6.00001C24 5.99142 24 5.98545 24 5.97686C23.9975 5.89258 23.9828 5.80916 23.9563 5.72916ZM18 1.71427H20.8106L21.9541 5.14285H18V1.71427ZM12.8572 1.71427H16.2858V5.14285H12.8572V1.71427ZM7.7143 1.71427H11.1429V5.14285H7.7143V1.71427ZM3.18943 1.71427H6.00003V5.14285H2.046L3.18943 1.71427ZM13.7143 22.2857H10.2857V15.4286H13.7143V22.2857ZM20.5715 21.4286C20.5715 21.902 20.1877 22.2857 19.7143 22.2857H15.4286V14.5715C15.4286 14.098 15.0448 13.7143 14.5714 13.7143H9.42857C8.95516 13.7143 8.57141 14.098 8.57141 14.5715V22.2857H4.2857C3.8123 22.2857 3.42854 21.902 3.42854 21.4286V11.0571C4.63144 11.3041 5.8823 11.017 6.85714 10.2703C8.38724 11.3941 10.4699 11.3941 12 10.2703C13.5301 11.3941 15.6128 11.3941 17.1429 10.2703C18.1177 11.0171 19.3686 11.3041 20.5715 11.0571V21.4286ZM19.7143 9.42855C18.9731 9.4281 18.2692 9.10295 17.7883 8.53885C17.4768 8.18241 16.9353 8.14595 16.5789 8.45743C16.5499 8.4827 16.5227 8.50992 16.4974 8.53885C15.5444 9.60257 13.9095 9.69222 12.8458 8.73919C12.7754 8.6761 12.7085 8.60926 12.6454 8.53885C12.31 8.18241 11.7491 8.16533 11.3926 8.50083C11.3795 8.51313 11.3668 8.52579 11.3546 8.53885C10.4015 9.60257 8.76662 9.69222 7.7029 8.73919C7.63248 8.6761 7.56564 8.60926 7.50255 8.53885C7.16711 8.18241 6.60617 8.16533 6.24974 8.50083C6.23668 8.51313 6.22397 8.52579 6.21172 8.53885C5.73083 9.10295 5.027 9.4281 4.2857 9.42855C2.86554 9.42855 1.71427 8.27728 1.71427 6.85712H22.2857C22.2857 8.27728 21.1345 9.42855 19.7143 9.42855Z"
        fill={props.selected ? "#0095FF" : "#CDCCD6"}
      />
    </svg>
  );
};

export default Commerce;