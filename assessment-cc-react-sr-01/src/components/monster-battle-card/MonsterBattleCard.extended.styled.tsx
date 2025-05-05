import styled from '@emotion/styled';
import {
  Card,
  Divider,
  LinearProgress,
  linearProgressClasses,
  Typography,
} from '@mui/material';
import { colors } from '../../constants/colors';

export const BattleMonsterCard = styled(Card, {
  shouldForwardProp: prop => prop !== 'centralized',
})<{ centralized?: boolean }>(({ centralized }) => ({
  padding: '13px 11px',
  width: 'calc(307px - 22px)',
  height: '415px',
  background: colors.white,
  boxShadow: '-2px 3px 10px rgba(0, 0, 0, 0.25)',
  borderRadius: '7px',
  display: centralized ? 'flex' : 'auto',
  alignItems: centralized ? 'center' : 'auto',
  justifyContent: centralized ? 'center' : 'auto',
}));

export const BattleMonsterTitle = styled(Typography, {
  shouldForwardProp: prop => prop !== 'small',
})<{ small?: boolean }>(({ small }) => ({
  fontFamily: 'Roboto',
  fontStyle: 'normal',
  fontWeight: '400',
  fontSize: small ? '22px' : '36px',
  lineHeight: small ? '26px' : '42px',
  color: colors.black,
}));

export const ProgressBar = styled(LinearProgress)(() => ({
  height: 8,
  borderRadius: 15,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor: colors.progressBarBackground,
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 15,
    backgroundColor: colors.progressColor,
  },
  marginBottom: '17px',
}));

export const MonsterImage = styled.img(() => ({
  borderRadius: '7px',
  width: '283px',
  height: '178px',
  marginBottom: '10px',
}));

export const CardDivider = styled(Divider)(() => ({
  width: '100%',
  marginTop: '5px',
  marginBottom: '13px',
}));

export const ProgressBarTitle = styled(Typography)(() => ({
  fontFamily: 'Roboto',
  fontStyle: 'normal',
  fontWeight: '400',
  fontSize: '12px',
  lineHeight: '14px',
  color: colors.black,
  marginBottom: '5px',
}));
