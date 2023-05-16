export const BikeCaseIcon = ({color, className}) => {
  return (
    <svg
      viewBox="0 0 32 32"
      xmlns="http://www.w3.org/2000/svg"
      style={{backgroundColor:color}}
    >
      <g fill="none" fillRule="evenodd">
        <path d="m0 0h32v32h-32z" />

        <path className={className}
          d="m23 0c.5522847 0 1 .44771525 1 1s-.4477153 1-1 1h-.269l1.6161904 6.03003794c.1362918-.01260449.2737161-.02130181.4121598-.02597892l.2406498-.00405902c3.8659932 0 7 3.1340068 7 7s-3.1340068 7-7 7-7-3.1340068-7-7c0-2.9479725 1.8223199-5.47031946 4.4019251-6.50200624l-.2609251-.97499376-10.0345187 2.6890815c1.1232566 1.1975132 1.830103 2.7902961 1.8894597 4.5472687l.004059.2406498c0 3.8659932-3.1340068 7-7 7-3.86599325 0-7-3.1340068-7-7s3.13400675-7 7-7c.83552424 0 1.63685849.14638476 2.37975505.41490657l-1.18375505-4.41490657h-1.196c-.55228475 0-1-.44771525-1-1s.44771525-1 1-1h4c.5522847 0 1 .44771525 1 1s-.4477153 1-1 1h-.733l1.159 4.324 10.197-2.733-.962-3.591h-2.661c-.5522847 0-1-.44771525-1-1s.4477153-1 1-1z"
          transform="translate(0 4)"
        />
      </g>
    </svg>
  );
};