export function ManavMark(props: React.ComponentProps<"svg">) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 256 256"
      {...props}
    >
      <text
        x="128"
        y="140"
        textAnchor="middle"
        dominantBaseline="middle"
        fill="currentColor"
        fontSize="140"
        fontWeight="700"
        fontFamily="var(--font-mono), ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, Liberation Mono, Courier New, monospace"
        letterSpacing="-8"
      >
        CY
      </text>
    </svg>
  );
}

export function getMarkSVG(color: string) {
  return `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 256 256"><text x="128" y="140" text-anchor="middle" dominant-baseline="middle" fill="${color}" font-size="140" font-weight="700" font-family="ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, &quot;Liberation Mono&quot;, &quot;Courier New&quot;, monospace" letter-spacing="-8">CY</text></svg>`;
}
