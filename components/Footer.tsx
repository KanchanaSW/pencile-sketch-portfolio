import { FoldedCornerDoodle } from "@/components/doodles";
import { site } from "@/config/site";

export function Footer() {
  return (
    <footer className="px-4 py-14 md:px-6 md:py-16">
      <div className="mx-auto max-w-6xl">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
          <div>
            <a href="#top" className="inline-flex items-center gap-2 text-ink">
              <FoldedCornerDoodle className="h-5 w-5" />
              <span className="font-hand text-2xl leading-none">
                {site.identity.monogram}
              </span>
            </a>
            <p className="mt-3 max-w-[32ch] font-sans text-sm leading-relaxed text-ink-muted">
              {site.footer.descriptor}
            </p>
          </div>
          {site.footer.clusters.map((cluster) => (
            <div key={cluster.title}>
              <p className="font-hand text-xl">{cluster.title}</p>
              <ul className="mt-3 space-y-2 font-sans text-sm">
                {cluster.links.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className="underline underline-offset-2"
                      {...("external" in link && link.external
                        ? { target: "_blank", rel: "noopener noreferrer" }
                        : {})}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <p className="mt-12 font-sans text-sm text-ink-muted">{site.footer.legal}</p>
      </div>
    </footer>
  );
}
