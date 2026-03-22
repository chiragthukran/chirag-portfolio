import { Panel, PanelContent, PanelHeader, PanelTitle } from "../panel";

const LEETCODE_USERNAME = "chiragthukran";
const LEETCODE_PROFILE_URL = `https://leetcode.com/u/${LEETCODE_USERNAME}/`;

export function LeetCodeGraph() {
  return (
    <Panel id="leetcode-activity">
      <PanelHeader className="flex items-center justify-between gap-3 py-4">
        <PanelTitle>LeetCode Activity</PanelTitle>

        <a
          className="text-sm font-medium text-muted-foreground underline-offset-4 hover:underline"
          href={LEETCODE_PROFILE_URL}
          target="_blank"
          rel="noopener noreferrer"
        >
          View LeetCode profile
        </a>
      </PanelHeader>

      <PanelContent>
        <div className="flex flex-col gap-6 rounded-xl border border-edge bg-card p-6 text-card-foreground">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-8">
            <div className="text-center sm:text-left">
              <p className="text-sm font-medium uppercase tracking-wider text-muted-foreground">
                Total Solved
              </p>
              <div className="mt-1 flex items-baseline gap-2">
                <span className="text-5xl font-bold tracking-tight text-foreground">
                  624
                </span>
                <span className="text-sm font-medium text-muted-foreground">
                  / 3300+
                </span>
              </div>
            </div>

            <div className="flex w-full flex-1 flex-col justify-center gap-3 sm:w-auto">
              <div className="flex items-center justify-between gap-4">
                <span className="w-16 text-sm font-medium text-emerald-500">
                  Easy
                </span>
                <div className="h-2 flex-1 overflow-hidden rounded-full bg-emerald-500/20">
                  <div
                    className="h-full rounded-full bg-emerald-500"
                    style={{ width: "65%" }}
                  ></div>
                </div>
                <span className="w-8 text-right text-sm font-medium text-foreground">
                  250
                </span>
              </div>

              <div className="flex items-center justify-between gap-4">
                <span className="w-16 text-sm font-medium text-amber-500">
                  Medium
                </span>
                <div className="h-2 flex-1 overflow-hidden rounded-full bg-amber-500/20">
                  <div
                    className="h-full rounded-full bg-amber-500"
                    style={{ width: "45%" }}
                  ></div>
                </div>
                <span className="w-8 text-right text-sm font-medium text-foreground">
                  314
                </span>
              </div>

              <div className="flex items-center justify-between gap-4">
                <span className="w-16 text-sm font-medium text-rose-500">
                  Hard
                </span>
                <div className="h-2 flex-1 overflow-hidden rounded-full bg-rose-500/20">
                  <div
                    className="h-full rounded-full bg-rose-500"
                    style={{ width: "15%" }}
                  ></div>
                </div>
                <span className="w-8 text-right text-sm font-medium text-foreground">
                  60
                </span>
              </div>
            </div>
          </div>
        </div>
      </PanelContent>
    </Panel>
  );
}
