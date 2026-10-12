import { FiArrowUpRight } from "react-icons/fi";

export const Container = ({ as: Tag = "div", className = "", children, ...props }) => (
  <Tag className={`container ${className}`} {...props}>{children}</Tag>
);

export const SectionHeading = ({ number, eyebrow, title, subtitle, className = "" }) => (
  <div className={`section-heading ${className}`} data-reveal>
    <div className="section-heading__meta"><span>{number}</span><span>{eyebrow}</span></div>
    <h2>{title}</h2>
    {subtitle && <p>{subtitle}</p>}
  </div>
);

export const Button = ({ href, children, variant = "dark", icon = true, ...props }) => {
  const Tag = href ? "a" : "button";
  return (
    <Tag className={`button button--${variant}`} href={href} {...props}>
      <span>{children}</span>{icon && <FiArrowUpRight aria-hidden="true" />}
    </Tag>
  );
};

export const Badge = ({ children }) => <span className="badge">{children}</span>;

export const Card = ({ className = "", children, ...props }) => (
  <article className={`card ${className}`} data-card {...props}>{children}</article>
);
