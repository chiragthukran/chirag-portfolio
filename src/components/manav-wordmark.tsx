export function ManavWordmark(props: React.ComponentProps<"svg">) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1400 300"
      fill="none"
      {...props}
    >
      <text
        x="700"
        y="170"
        textAnchor="middle"
        dominantBaseline="middle"
        fill="currentColor"
        fontSize="120"
        fontWeight="700"
        fontFamily="var(--font-sans), ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, sans-serif"
        letterSpacing="1"
      >
        Chirag Yadav
      </text>
    </svg>
  );
}

export function getWordmarkSVG(color: string) {
  return `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 1400 300"><text x="700" y="170" text-anchor="middle" dominant-baseline="middle" fill="${color}" font-size="120" font-weight="700" font-family="ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, &quot;Segoe UI&quot;, sans-serif" letter-spacing="1">Chirag Yadav</text></svg>`;
}
