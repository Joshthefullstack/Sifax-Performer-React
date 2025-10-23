import React, { useRef, useState, useLayoutEffect } from "react";
import "../assets/css/dashboard.css";

export interface AccordionItemData {
  id: string;
  title: string;
  percent: number; // progress bar percentage
  badgeText?: string;
  badgeClass?: string; // e.g. "bg-label-success"
  children?: React.ReactNode;
}

interface AccordionProps {
  items: AccordionItemData[];
  /** If true, only one panel is open at a time */
  singleOpen?: boolean;
}

const Accordion: React.FC<AccordionProps> = ({ items, singleOpen = true }) => {
  const [openId, setOpenId] = useState<string | null>(null);

  const handleToggle = (id: string) => {
    if (singleOpen) {
      setOpenId((prev) => (prev === id ? null : id));
    } else {
      // multi-open not implemented here — keep singleOpen default unless you want array state
      setOpenId((prev) => (prev === id ? null : id));
    }
  };

  return (
    <div className="accordion-wrapper">
      {items.map((item) => (
        <AccordionPanel
          key={item.id}
          data={item}
          isOpen={openId === item.id}
          onToggle={() => handleToggle(item.id)}
        />
      ))}
    </div>
  );
};

export default Accordion;

/* ----------------------------- helper panel ----------------------------- */

interface PanelProps {
  data: AccordionItemData;
  isOpen: boolean;
  onToggle: () => void;
}

const AccordionPanel: React.FC<PanelProps> = ({ data, isOpen, onToggle }) => {
  const contentRef = useRef<HTMLDivElement | null>(null);
  const [height, setHeight] = useState<string>("0px");

  // Ensure height adapts on open/close and on window resize
  useLayoutEffect(() => {
    const el = contentRef.current;
    if (!el) return;

    if (isOpen) {
      // measure and set explicit height for smooth transition
      const full = `${el.scrollHeight}px`;
      setHeight(full);

      // after transition, set to 'auto' so content can grow naturally
      const t = window.setTimeout(() => {
        setHeight("auto");
      }, 320); // slightly longer than CSS transition
      return () => clearTimeout(t);
    } else {
      // when closing from auto, force measured height first, then to 0
      if (height === "auto") {
        // force a frame to let browser pick up the measured height
        const current = `${el.scrollHeight}px`;
        setHeight(current);
        // then set to 0 in the next frame
        requestAnimationFrame(() => {
          requestAnimationFrame(() => setHeight("0px"));
        });
      } else {
        setHeight("0px");
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpen]);

  // Update height on resize if open and height is "auto" (so it re-measures)
  React.useEffect(() => {
    const onResize = () => {
      if (!contentRef.current) return;
      if (isOpen && height === "auto") {
        contentRef.current.style.height = "auto";
      }
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [isOpen, height]);

  return (
    <div className="card card-action mb-3 bordered">
      <div className="card-header header-elements border-bottom">
        <h6 className="card-action-title mb-0">{data.title}</h6>

        <div className="card-header-elements ms-auto me-3 d-flex align-items-center">
          <div className="me-2" style={{ width: 120 }}>
            <div
              className="progress bg-label-success"
              style={{ width: "100%" }}>
              <div
                className="progress-bar progress-bar-striped progress-bar-animated bg-success"
                role="progressbar"
                style={{ width: `${data.percent}%` }}
                aria-valuenow={data.percent}
                aria-valuemin={0}
                aria-valuemax={100}
              />
            </div>
          </div>

          <span className="me-3">{data.percent}%</span>

          <span
            className={`badge ${
              data.badgeClass ?? "bg-label-success"
            } rounded-pill`}>
            {data.badgeText ?? "Completed"}
          </span>
        </div>

        <div className="card-action-element">
          <button
            className={`card-collapsible ${isOpen ? "open" : ""}`}
            aria-expanded={isOpen}
            onClick={onToggle}
            aria-controls={`panel-${data.id}`}
            style={{
              background: "transparent",
              border: "none",
              cursor: "pointer",
            }}
            title={isOpen ? "Collapse" : "Expand"}>
            {/* simple chevron svg that rotates */}
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              style={{
                transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
                transition: "transform .25s ease",
              }}>
              <path d="M7 10l5 5 5-5z" fill="currentColor" />
            </svg>
          </button>
        </div>
      </div>

      {/* content wrapper with dynamic height for smooth animation */}
      <div
        id={`panel-${data.id}`}
        className="accordion-panel-content"
        ref={contentRef}
        style={{
          height: height,
          overflow: "hidden",
          transition: "height 280ms ease",
        }}>
        <div className="card-body pt-4">{data.children}</div>
      </div>
    </div>
  );
};
