export function TypographyH1({ children }) {
  return (
    <h1 className="scroll-m-20 text-2xl font-extrabold tracking-tight lg:text-3xl">
      {children}
    </h1>
  );
}

export function TypographyH4({ children }) {
  return (
    <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">
      {children}
    </h4>
  );
}

export function TypographyBlockquote({ children }) {
  return (
    <blockquote className="mt-6 border-l-2 pl-6 italic">{children}</blockquote>
  );
}
