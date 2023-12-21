import { useScrollAnimation } from "../../../hooks/useScrollAnimation";
import { AreaData } from "./metaData/OccupancyAreaData";
import * as S from "./Style";

export const OccupancyAreaSection = () => {
  const { ref, controls } = useScrollAnimation<HTMLUListElement>();
  return (
    <S.OccupancyAreaContainer id="occupancyArea">
      <S.OccupancyTitle>Áreas de Atuação</S.OccupancyTitle>
      <S.OccupancyArea
        ref={ref}
        variants={{
          hidden: { opacity: 0, y: 75 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={controls}
        transition={{ duration: 0.5, delay: 0.25 }}
      >
        {AreaData.map((area, i) => (
          <li key={i}>
            <span>{area.icon}</span>
            <h2>{area.title}</h2>
            <p>{area.content}</p>
          </li>
        ))}
      </S.OccupancyArea>
    </S.OccupancyAreaContainer>
  );
};
