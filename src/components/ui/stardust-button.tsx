import React from 'react';

interface StardustButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
}

export const StardustButton = ({
  children = "RESGATAR",
  onClick,
  className = "",
  ...props
}: StardustButtonProps) => {
  const buttonStyle: React.CSSProperties = {
    // @ts-expect-error CSS custom properties
    '--radius': '12px', // Squared corners as requested
    outline: 'none',
    cursor: 'pointer',
    border: 'none',
    position: 'relative',
    borderRadius: 'var(--radius)',
    // Gold gradient top to bottom
    background: 'linear-gradient(180deg, #F3DBB7 0%, #A5825B 100%)',
    transition: 'all 0.1s ease',
    // 3D Effect: Bottom darker border/shadow to simulate thickness
    boxShadow: `
      0px 4px 0px #806446, /* Darker gold/brown for thickness */
      0px 5px 10px rgba(0,0,0,0.2) /* Soft drop shadow */
    `,
    transform: 'translateY(0)',
  };

  const wrapStyle: React.CSSProperties = {
    fontSize: '18px',
    fontWeight: 600, // Medium/Semi-bold
    fontFamily: "Helvetica, Arial, sans-serif", // Changed to Helvetica as requested
    color: '#0A0A0A !important' as any,
    padding: '16px 32px',
    borderRadius: 'inherit',
    position: 'relative',
    overflow: 'hidden',
    zIndex: 1,
    textDecoration: 'none',
    textShadow: 'none',
    // Force solid text (override any gradient inheritance)
    WebkitTextFillColor: '#0A0A0A',
    WebkitTextStroke: '0',
    backgroundClip: 'border-box' as any,
    WebkitBackgroundClip: 'border-box' as any,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '8px',
  };

  const beforeAfterStyles = `
    /* Force solid text - override gradient inheritance */
    .stardust-button .wrap,
    .stardust-button .wrap * {
      color: #0A0A0A !important;
      -webkit-text-fill-color: #0A0A0A !important;
      -webkit-background-clip: border-box !important;
      background-clip: border-box !important;
      text-shadow: none !important;
    }

    .stardust-button:hover {
      filter: brightness(1.05); /* Slight brightness on hover */
      transform: translateY(-1px) !important;
      box-shadow:
        0px 6px 0px #806446,
        0px 8px 15px rgba(0,0,0,0.3) !important;
    }

    .stardust-button:active {
      transform: translateY(4px) !important; /* Push down effect */
      box-shadow:
        0px 0px 0px #806446, /* Collapse thickness */
        0px 0px 0px rgba(0,0,0,0) !important;
    }

    /* Optional: Inner highlight for extra polish */
    .stardust-button::after {
      content: '';
      position: absolute;
      top: 0; left: 0; right: 0;
      height: 50%;
      background: linear-gradient(180deg, rgba(255,255,255,0.4) 0%, rgba(255,255,255,0) 100%);
      border-radius: var(--radius) var(--radius) 0 0;
      pointer-events: none;
    }
  `;

  return (
    <>
      <style>{beforeAfterStyles}</style>
      <button
        className={`stardust-button ${className}`}
        style={buttonStyle}
        onClick={onClick}
        {...props}
      >
        <div className="wrap" style={wrapStyle}>
          {children}
        </div>
      </button>
    </>
  );
};
