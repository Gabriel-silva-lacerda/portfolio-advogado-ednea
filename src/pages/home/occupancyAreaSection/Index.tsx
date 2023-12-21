import * as S from "./Style";
import { AreaData } from "./metaData/OccupancyAreaData";

export const OccupancyAreaSection = () => {
  return (
    <S.OccupancyAreaContainer id="occupancyArea">
      <S.OccupancyTitle>Áreas de Atuação</S.OccupancyTitle>
      <S.OccupancyArea>
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
