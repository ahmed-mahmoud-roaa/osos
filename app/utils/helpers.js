export function clx(...classnames) {
  const classname = classnames.reduce((prev, current) => {
    if (!current) {
      return prev;
    }

    if (typeof current === "string") {
      return `${prev} ${current}`;
    }

    if (Array.isArray(current)) {
      return `${prev} ${clx(...current)}`;
    }

    if (typeof current === "object") {
      const result = Object.entries(current)
        .map(([key, value]) => {
          return value ? key : null;
        })
        .filter(Boolean)
        .join(" ");

      return `${prev} ${result}`;
    }

    throw new Error(
      "error: not allowed, please provide either string, array, or object"
    );
  }, "");

  // trim extra spaces
  return classname.replace(/\s+/g, " ").trim();
}
