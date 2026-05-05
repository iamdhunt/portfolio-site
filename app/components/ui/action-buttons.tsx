import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleInfo, faGlobe } from "@fortawesome/free-solid-svg-icons";

type ActionButtonsProps = {
  liveUrl: string;
  detailsUrl?: string;
  showDetailsButton?: boolean;
  liveOpensInNewTab?: boolean;
  containerClassName?: string;
  linkClassName?: string;
};

export function ActionButtons({
  liveUrl,
  detailsUrl,
  showDetailsButton = true,
  liveOpensInNewTab = false,
  containerClassName = "mt-3 flex flex-wrap gap-2 text-sm",
  linkClassName = "flex items-start justify-center rounded-full bg-white px-4 py-2 font-medium text-dark",
}: ActionButtonsProps) {
  return (
    <div className={containerClassName}>
      <a
        href={liveUrl}
        target={liveOpensInNewTab ? "_blank" : undefined}
        rel={liveOpensInNewTab ? "noreferrer" : undefined}
        className={linkClassName}
      >
        <FontAwesomeIcon icon={faGlobe} className="mr-1.5 h-4.5! w-4.5!" />
        Live
      </a>
      {showDetailsButton && detailsUrl ? (
        <a href={detailsUrl} className={linkClassName}>
          <FontAwesomeIcon
            icon={faCircleInfo}
            className="mr-1.5 h-4.5! w-4.5!"
          />
          Learn More
        </a>
      ) : null}
    </div>
  );
}
