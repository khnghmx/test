import classNames from "classnames";
import { match } from "ts-pattern";

interface CoreButtonProps {
  mainStyle?: "primary" | "secondary";
  mainColor?: "blue" | "red";
  type?: "button" | "submit" | "reset";
}

export const CoreButton = ({
  mainStyle = "primary",
  mainColor = "blue",
  type = "button",
  ...props
}: CoreButtonProps & React.HTMLProps<HTMLButtonElement>) => {
  const skin = match({ mainStyle, mainColor })
    .with(
      { mainStyle: "primary", mainColor: "blue" },
      () => "bg-blue-400 text-white border border-blue-400"
    )
    .with(
      { mainStyle: "secondary", mainColor: "blue" },
      () => "bg-transparent border-blue-400 text-blue-400"
    )
    .with(
      { mainStyle: "primary", mainColor: "red" },
      () => "bg-rose-400 text-white border border-red-400"
    )
    .with(
      { mainStyle: "secondary", mainColor: "red" },
      () => "bg-transparent border-rose-400 text-rose-400"
    )
    .exhaustive();
  return (
    <button
      type={type}
      {...props}
      className={classNames(
        "rounded px-4 py-2 border opacity-100 disabled:opacity-50",
        skin
      )}
    ></button>
  );
};
