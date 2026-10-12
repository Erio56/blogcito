type SiteIconName =
  | "cat"
  | "colombia"
  | "heart"
  | "instagram"
  | "music"
  | "sparkle"
  | "umbrella"
  | "x";

type SiteIconProps = {
  name: SiteIconName;
  className?: string;
};

export function SiteIcon({ name, className }: SiteIconProps) {
  if (name === "colombia") {
    return (
      <svg
        className={className}
        viewBox="0 0 24 16"
        aria-hidden="true"
        focusable="false"
      >
        <path fill="#fcd116" d="M0 0h24v8H0z" />
        <path fill="#003893" d="M0 8h24v4H0z" />
        <path fill="#ce1126" d="M0 12h24v4H0z" />
      </svg>
    );
  }

  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      focusable="false"
    >
      {name === "cat" && (
        <path d="M4 3 9 6h6l5-3 1 8a9 9 0 0 1-18 0l1-8Zm5.5 7a1 1 0 1 0 0 2 1 1 0 0 0 0-2Zm5 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2ZM10 16h4l-2 2-2-2Z" />
      )}
      {name === "heart" && (
        <path d="M12 21s-9-5.6-9-12a5 5 0 0 1 9-3 5 5 0 0 1 9 3c0 6.4-9 12-9 12Z" />
      )}
      {name === "instagram" && (
        <>
          <path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5Zm0 2a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3H7Z" />
          <path d="M12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm5.5-3a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z" />
        </>
      )}
      {name === "music" && (
        <path d="M19 3v13.2a4 4 0 1 1-2-3.46V7l-8 1.8v9.4a4 4 0 1 1-2-3.46V7.2L19 5V3Z" />
      )}
      {name === "sparkle" && (
        <path d="m12 1 2.4 7.6L22 11l-7.6 2.4L12 21l-2.4-7.6L2 11l7.6-2.4L12 1Zm7 14 .9 2.1L22 18l-2.1.9L19 21l-.9-2.1L16 18l2.1-.9L19 15Z" />
      )}
      {name === "umbrella" && (
        <path d="M12 2a10 10 0 0 0-10 10c2.5-2 4.5-2 7 0 2-2 4-2 6 0 2.5-2 4.5-2 7 0A10 10 0 0 0 12 2Zm-1 11v6a3 3 0 0 0 6 0h-2a1 1 0 0 1-2 0v-6h-2Z" />
      )}
      {name === "x" && (
        <path d="M18.9 2H22l-6.8 7.8L23.2 22h-6.3L12 14.8 5.7 22H2.5l7.3-8.4L1.9 2h6.5l4.5 6.7L18.9 2Zm-1.1 18h1.7L7.4 3.9H5.6L17.8 20Z" />
      )}
    </svg>
  );
}
