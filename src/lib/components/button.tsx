import { Button as B } from "antd";
import { cva } from "class-variance-authority";

const button = cva("x", {
  variants: {
    intent: {
      primary: "bg-red-400",
    },
  },
});

const classes = button({ intent: "primary" });

console.log(classes);

export function Button({ children }: { children: string }) {
  return <B className={classes}>{children}</B>;
}
