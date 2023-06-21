"use client";
import { Tooltip } from "react-tooltip";
import { useCopyToClipboard } from "usehooks-ts";

const Email = () => {
  const [value, copy] = useCopyToClipboard();
  const email = "mail@abrahamdn.com";

  return (
    <>
      <p
        id="email-text"
        className="opacity-80 mt-2 md:mt-4 cursor-pointer"
        onClick={() => copy(email)}
      >
        {email}
      </p>
      <Tooltip
        anchorId="email-text"
        place="top"
        content={value ? "Copied!" : "Copy"}
      />
    </>
  );
};
export default Email;
