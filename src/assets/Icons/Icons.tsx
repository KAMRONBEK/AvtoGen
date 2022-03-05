import * as React from 'react';
import {Animated, GestureResponderEvent, TouchableOpacity} from 'react-native';
import Svg, {Circle, G, Path, Rect} from 'react-native-svg';
import {COLORS} from '../../constants/colors';

// import { colors } from 'constants/colors';

let AnimatedPath = Animated.createAnimatedComponent(Path);

export interface IconProps {
  color?: string;
  focused?: boolean;
  size?: number;
  style?: any;
  onPress?: () => void;
}

export interface PressableIconProps extends React.ComponentProps<any> {
  onPress: ((event: GestureResponderEvent) => void) | undefined;
}

export let PressableIcon = ({onPress, children}: PressableIconProps) => {
  return <TouchableOpacity onPress={onPress}>{children}</TouchableOpacity>;
};

export function UserIcon({
  color = '#fff',
  focused: active,
  size = 20,
  style,
}: IconProps) {
  let props = {fill: color, stroke: color, height: size, width: size};
  return (
    <Svg viewBox="0 0 17 22" {...props}>
      <Path
        d="M14.45 11.05A2.55 2.55 0 0117 13.6H8.5v1.7h8.432a5.902 5.902 0 01-.544 1.7H8.5v1.7h6.68c-1.456 1.5-3.737 2.55-6.68 2.55-5.338 0-8.5-3.45-8.5-6.8v-.85a2.55 2.55 0 012.55-2.55h11.9zM13.098 3.825a4.715 4.715 0 010 1.7H8.5v1.7h3.918a4.675 4.675 0 110-5.1H8.5v1.7h4.598z"
        fill="#fff"
      />
    </Svg>
  );
}
export function Phone({
  color = '#fff',
  focused: active,
  size = 22,
  style,
}: IconProps) {
  let props = {fill: color, stroke: color, height: size, width: size};
  return (
    <Svg viewBox="0 0 17 28" {...props}>
      <Path
        d="M13.6 1.7a1.7 1.7 0 011.7 1.7v20.4a1.7 1.7 0 01-1.7 1.7H3.4a1.7 1.7 0 01-1.7-1.7V3.4a1.7 1.7 0 011.7-1.7h10.2zM3.4 0A3.4 3.4 0 000 3.4v20.4a3.4 3.4 0 003.4 3.4h10.2a3.4 3.4 0 003.4-3.4V3.4A3.4 3.4 0 0013.6 0H3.4z"
        fill={COLORS.white}
      />
      <Path
        d="M8.5 23.8a1.7 1.7 0 100-3.4 1.7 1.7 0 000 3.4z"
        fill={COLORS.white}
      />
    </Svg>
  );
}
export function Armchair({
  color = '#fff',
  focused: active,
  size = 20,
  style,
}: IconProps) {
  let props = {fill: color, stroke: color, height: size, width: size};
  return (
    <Svg viewBox="0 0 18 24" {...props}>
      <Path
        d="M2.45 0h.831c.23 0 .449.092.61.257.593.602.674 1.549.194 2.246l-.15.217A3.672 3.672 0 003.71 6.5l2.324 4.427a5.916 5.916 0 01-.535 6.332l-1.772 2.316a.317.317 0 01-.562-.124L.245 7.09A9.154 9.154 0 01.937.95C1.224.368 1.81 0 2.45 0zM9.858 18.162h5.589c1.41 0 2.553 1.162 2.553 2.595v.648C18 22.838 16.857 24 15.447 24H8.362a4.432 4.432 0 01-3.16-1.33l-.711-.723a.655.655 0 01.08-.987l2.69-1.952a4.42 4.42 0 012.597-.846z"
        fill="#fff"
      />
    </Svg>
  );
}
export function CarSetting({
  color = '#fff',
  focused: active,
  size = 20,
  style,
}: IconProps) {
  let props = {fill: color, stroke: color, height: size, width: size};
  return (
    <Svg viewBox="0 0 17 20" {...props}>
      <Path
        d="M15.17 11.6l-1.44-2.933a1.385 1.385 0 00-.502-.49A1.352 1.352 0 0012.554 8H4.446a1.352 1.352 0 00-.674.176c-.206.117-.38.286-.503.491L1.831 11.6.209 13.136a.667.667 0 00-.209.49v5.707c0 .177.069.347.192.472A.647.647 0 00.654 20h2.615c.262 0 .654-.267.654-.533v-.8h9.154v.666c0 .267.261.667.523.667h2.746c.174 0 .34-.07.462-.195a.673.673 0 00.192-.472v-5.707a.677.677 0 00-.21-.49L15.17 11.6zM4.576 9.334h7.846L13.731 12H3.269l1.308-2.666zm.654 6.133c0 .266-.393.533-.654.533H1.83c-.262 0-.523-.4-.523-.666v-1.467c.13-.4.392-.667.784-.534l2.616.534c.261 0 .523.4.523.666v.934zm10.461-.133c0 .266-.261.666-.523.666h-2.746c-.261 0-.654-.267-.654-.533v-.934c0-.266.262-.666.523-.666l2.616-.534c.392-.133.654.134.784.534v1.466zM17 2.667V4a1.358 1.358 0 01-.394.948c-.25.25-.586.389-.936.386H5.686c-.35.467-.814.833-1.345 1.063a3.275 3.275 0 01-3.268-.383A3.386 3.386 0 010 4.667h3.27V2.001H0C.237 1.465.607 1 1.073.654A3.275 3.275 0 014.342.27c.53.23.993.596 1.344 1.063h9.984c.35-.003.686.136.936.386s.39.59.394.947z"
        fill="#fff"
      />
    </Svg>
  );
}
export function Computer({
  color = '#fff',
  focused: active,
  size = 20,
  style,
}: IconProps) {
  let props = {fill: color, stroke: color, height: size, width: size};
  return (
    <Svg viewBox="0 0 20 16" {...props}>
      <Path
        d="M19.754 13.631L18 11V2c0-1.102-.9-2-2-2H4C2.899 0 2 .898 2 2v9L.246 13.631C0 14 0 14.213 0 14.5v.5c0 .5.5 1 .999 1h18.002c.499 0 .999-.5.999-1v-.5c0-.287 0-.5-.246-.869zM7 14l.6-1h4.8l.6 1H7zm9-4H4V2h12v8z"
        fill="#fff"
      />
    </Svg>
  );
}
export function Barbershop({
  color = '#fff',
  focused: active,
  size = 20,
  style,
}: IconProps) {
  let props = {fill: color, stroke: color, height: size, width: size};
  return (
    <Svg viewBox="0 0 12 24" {...props}>
      <Path
        d="M11.2 6.98c.442 0 .8-.33.8-.736v-.777c0-.408-.358-.737-.8-.737 0-6.307-10.4-6.307-10.4 0-.442 0-.8.33-.8.737v.777c0 .406.358.736.8.736h.112v14.77H.8c-.442 0-.8.33-.8.736v.777c0 .407.358.737.8.737h10.4c.442 0 .8-.33.8-.737v-.777c0-.406-.358-.736-.8-.736h-.112V6.98h.112zm-9.634 8.532v-2.359c2.956-.723 5.912-3.53 8.868-4.254v2.359c-2.956.723-5.912 3.53-8.868 4.255zm8.868-2.144v2.358c-2.956.724-5.912 3.53-8.868 4.254v-2.358c2.956-.724 5.912-3.531 8.868-4.254zm-7.75 8.382c2.583-1.034 5.167-3.25 7.75-3.882v2.358c-1.32.324-2.386.91-3.426 1.524H2.684zM1.566 11.012V8.653c1.223-.299 2.446-.956 3.668-1.673h4.477c-2.715.95-5.43 3.367-8.145 4.032z"
        fill="#fff"
      />
    </Svg>
  );
}
export function Car({
  color = '#fff',
  focused: active,
  size = 20,
  style,
}: IconProps) {
  let props = {fill: color, stroke: color, height: size, width: size};
  return (
    <Svg viewBox="0 0 25 16" {...props}>
      <Path
        d="M24.91 9.011c-.188-2.02-.497-2.414-.614-2.562-.268-.342-.697-.566-1.151-.8a.186.186 0 01-.065-.054.176.176 0 01-.027-.159.18.18 0 01.044-.071.766.766 0 00.236-.627.802.802 0 00-.276-.528.868.868 0 00-.575-.21h-.813a.924.924 0 00-.104.006.456.456 0 00-.074-.023c-.481-.977-1.14-2.314-2.506-2.966C16.96.05 13.227 0 12.498 0c-.729 0-4.46.05-6.484 1.016-1.366.652-2.025 1.989-2.506 2.966l-.004.007a.351.351 0 00-.07.018A.923.923 0 003.328 4h-.814a.868.868 0 00-.576.21.802.802 0 00-.276.529.767.767 0 00.24.623.179.179 0 01.05.153.176.176 0 01-.033.077.185.185 0 01-.065.054c-.454.236-.886.46-1.152.8-.116.15-.425.542-.613 2.562-.104 1.137-.12 2.314-.038 3.072.172 1.575.493 2.527.506 2.566a.8.8 0 00.262.368c.122.096.27.157.426.176v.01c0 .212.088.416.244.566.157.15.369.234.59.234h2.917a.852.852 0 00.589-.234.784.784 0 00.244-.566c.449 0 .76-.077 1.091-.159a8.587 8.587 0 011.459-.245 48.63 48.63 0 014.118-.196c.93 0 2.58.05 4.172.196.494.04.985.122 1.464.246.317.078.617.15 1.034.158 0 .212.087.415.244.565.156.15.368.234.589.234h2.917a.852.852 0 00.59-.234.784.784 0 00.244-.566v-.005a.851.851 0 00.427-.176.8.8 0 00.262-.368c.014-.04.335-.992.507-2.566.081-.759.067-1.934-.038-3.073zM5.014 4.666c.417-.85.894-1.813 1.742-2.218 1.227-.586 3.768-.85 5.742-.85 1.975 0 4.516.262 5.742.85.849.405 1.323 1.368 1.742 2.217l.052.109a.387.387 0 01-.027.39.412.412 0 01-.156.135.431.431 0 01-.204.046c-1.731-.045-5.378-.189-7.149-.189-1.77 0-5.417.147-7.15.192a.43.43 0 01-.36-.181.39.39 0 01-.028-.39c.018-.037.037-.074.054-.112zm.622 3.981c-.896.104-1.798.155-2.7.153-.553 0-1.122-.15-1.228-.622-.072-.318-.064-.496-.025-.676.032-.152.085-.263.345-.302.677-.1 1.056.026 2.164.339.735.208 1.266.484 1.568.703.151.108.07.39-.124.405zm11.532 4.1c-.686.075-2.057.047-4.654.047s-3.968.028-4.653-.047c-.708-.075-1.61-.717-.994-1.29.41-.377 1.367-.659 2.64-.817 1.274-.159 1.813-.24 3.002-.24 1.188 0 1.673.05 3.001.24 1.329.191 2.332.476 2.64.818.562.612-.275 1.21-.982 1.292v-.003zm6.12-4.57c-.104.475-.677.623-1.227.623-.92 0-1.839-.051-2.752-.154-.16-.014-.234-.283-.072-.405.297-.224.833-.495 1.567-.702 1.109-.314 1.748-.44 2.297-.335.134.026.205.163.213.25.037.24.028.486-.026.724z"
        fill="#fff"
      />
    </Svg>
  );
}
export function BackIcon({
  color = '#fff',
  focused: active,
  size = 20,
  style,
}: IconProps) {
  let props = {fill: color, stroke: color, height: size, width: size};
  return (
    <Svg viewBox="0 0 19 16" {...props}>
      <Path
        d="M18.414 6.707H3.828l5.293-5.293L7.707 0 0 7.707l7.707 7.707L9.121 14 3.828 8.707h14.586v-2z"
        fill="#F39C12"
        stroke="none"
      />
    </Svg>
  );
}
export function BackWIcon({
  color = '#fff',
  focused: active,
  size = 20,
  style,
}: IconProps) {
  let props = {fill: color, stroke: color, height: size, width: size};
  return (
    <Svg viewBox="0 0 19 16" {...props}>
      <Path
        d="M18.414 6.707H3.828l5.293-5.293L7.707 0 0 7.707l7.707 7.707L9.121 14 3.828 8.707h14.586v-2z"
        fill="#FFF"
        stroke="none"
      />
    </Svg>
  );
}
export function SearchIcon({
  color = '#fff',
  focused: active,
  size = 20,
  style,
}: IconProps) {
  let props = {fill: color, stroke: color, height: size, width: size};
  return (
    <Svg viewBox="0 0 21 21" {...props}>
      <Path
        d="M20 20l-4.486-4.494L20 20zM18 9.5a8.5 8.5 0 11-17 0 8.5 8.5 0 0117 0v0z"
        stroke="#434343"
        strokeWidth={2}
        fill="none"
        strokeLinecap="round"
      />
    </Svg>
  );
}
export function MenuIcon({
  color = '#fff',
  focused: active,
  size = 20,
  style,
}: IconProps) {
  let props = {fill: color, stroke: color, height: size, width: size};
  return (
    <Svg viewBox="0 0 22 15" {...props}>
      <Path
        d="M0 1.066C0 .476.478 0 1.066 0h8.582a1.066 1.066 0 110 2.132H1.066A1.066 1.066 0 010 1.066zM0 7.5c0-.59.478-1.066 1.066-1.066h19.297a1.066 1.066 0 010 2.132H1.066A1.066 1.066 0 010 7.5zM1.066 12.868a1.066 1.066 0 100 2.132h12.868a1.066 1.066 0 100-2.132H1.066z"
        fill="#272727"
        stroke="none"
      />
    </Svg>
  );
}
export function HomeIcon({
  color = '#fff',
  focused: active,
  size = 60,
  style,
}: IconProps) {
  let props = {fill: color, stroke: color, height: size, width: size};
  return (
    <Svg viewBox="0 0 60 60" {...props}>
      <Circle cx={30} cy={30} r={30} stroke="none" fill="#F39C12" />
      <Path
        d="M21.833 41.667h16.334a2.336 2.336 0 002.333-2.334v-10.5a1.164 1.164 0 00-.342-.825l-9.333-9.333a1.164 1.164 0 00-1.65 0l-9.333 9.333a1.164 1.164 0 00-.342.825v10.5a2.336 2.336 0 002.333 2.334zm5.834-2.334V33.5h4.666v5.833h-4.666zm-5.834-10.017L30 21.15l8.167 8.166v10.017h-3.5V33.5a2.336 2.336 0 00-2.334-2.333h-4.666a2.336 2.336 0 00-2.334 2.333v5.833h-3.5V29.316z"
        fill="#fff"
        stroke="none"
      />
    </Svg>
  );
}
export function MenuIocnVertical({
  color = '#fff',
  focused: active,
  size = 45,
  style,
}: IconProps) {
  let props = {fill: color, stroke: color, height: size, width: size};
  return (
    <Svg viewBox="0 0 44 44" {...props}>
      <G>
        <Circle cx={22} cy={20} r={18} stroke="none" fill="#F39C12" />
        <Path
          d="M22 22a2 2 0 100-4 2 2 0 000 4zM22 15a2 2 0 100-4 2 2 0 000 4zM22 29a2 2 0 100-4 2 2 0 000 4z"
          fill="#fff"
        />
      </G>
    </Svg>
  );
}

export function Cars({
  color = '#fff',
  focused: active,
  size = 30,
  style,
}: IconProps) {
  let props = {fill: color, stroke: color, height: size, width: size};
  return (
    <Svg viewBox="0 0 26 16" {...props}>
      <Path
        d="M25.814 9.011c-.189-2.02-.5-2.414-.617-2.562-.27-.342-.701-.566-1.158-.8a.186.186 0 01-.065-.054.176.176 0 01-.027-.159.18.18 0 01.044-.071.764.764 0 00.237-.627.8.8 0 00-.277-.528.876.876 0 00-.58-.21h-.817a.935.935 0 00-.104.006.458.458 0 00-.074-.023c-.485-.977-1.147-2.314-2.521-2.966C17.817.05 14.063 0 13.329 0c-.733 0-4.487.05-6.522 1.016-1.374.652-2.037 1.989-2.521 2.966l-.005.007a.355.355 0 00-.07.018A.934.934 0 004.106 4h-.82a.876.876 0 00-.579.21.8.8 0 00-.277.529c-.01.114.007.229.049.336a.793.793 0 00.192.287.178.178 0 01.05.153.176.176 0 01-.033.077.186.186 0 01-.065.054c-.457.236-.89.46-1.159.8-.117.15-.427.542-.616 2.562-.105 1.137-.121 2.314-.039 3.072.173 1.575.496 2.527.51 2.566a.8.8 0 00.263.368.86.86 0 00.428.176v.01c0 .212.089.416.246.566a.86.86 0 00.593.234h2.934a.86.86 0 00.593-.234.782.782 0 00.246-.566c.45 0 .765-.077 1.097-.159.48-.123.972-.206 1.468-.245a49.209 49.209 0 014.142-.196c.935 0 2.595.05 4.197.196.497.04.99.122 1.473.246.318.078.62.15 1.04.158 0 .212.087.415.245.565a.86.86 0 00.593.234h2.934a.86.86 0 00.593-.234.782.782 0 00.245-.566v-.005a.86.86 0 00.43-.176.8.8 0 00.264-.368c.014-.04.337-.992.51-2.566.082-.759.067-1.934-.039-3.073zM5.801 4.666c.42-.85.899-1.813 1.752-2.218 1.234-.586 3.79-.85 5.776-.85 1.986 0 4.543.262 5.776.85.854.405 1.331 1.368 1.753 2.217l.052.109a.384.384 0 01-.028.39.413.413 0 01-.156.135.435.435 0 01-.206.046c-1.741-.045-5.41-.189-7.19-.189-1.782 0-5.45.147-7.194.192a.436.436 0 01-.206-.045.413.413 0 01-.156-.136.388.388 0 01-.028-.39c.018-.037.038-.074.055-.112zm.625 3.981c-.901.104-1.808.155-2.716.153-.556 0-1.129-.15-1.235-.622-.073-.318-.065-.496-.026-.676.033-.152.086-.263.348-.302.681-.1 1.062.026 2.177.339.74.208 1.273.484 1.577.703.152.108.071.39-.125.405zm11.6 4.1c-.69.075-2.068.047-4.681.047s-3.991.028-4.68-.047c-.712-.075-1.62-.717-1-1.29.412-.377 1.374-.659 2.655-.817 1.282-.159 1.824-.24 3.02-.24s1.683.05 3.02.24c1.335.191 2.345.476 2.655.818.565.612-.277 1.21-.989 1.292v-.003zm6.157-4.57c-.104.475-.68.623-1.234.623-.925 0-1.85-.051-2.769-.154-.16-.014-.235-.283-.072-.405.299-.224.838-.495 1.576-.702 1.116-.314 1.758-.44 2.31-.335.136.026.207.163.215.25.037.24.028.486-.026.724z"
        fill="#000"
        stroke="none"
      />
    </Svg>
  );
}
export function DrawerbackIcon({
  color = '#fff',
  focused: active,
  size = 18,
  style,
}: IconProps) {
  let props = {fill: color, stroke: color, height: size, width: size};
  return (
    <Svg viewBox="0 0 18 18" {...props}>
      <Path
        d="M.378.378a1.285 1.285 0 011.82 0L9 7.183 15.803.378a1.287 1.287 0 111.82 1.82L10.818 9l6.805 6.803a1.288 1.288 0 01-1.82 1.82L9 10.818l-6.802 6.805a1.288 1.288 0 01-1.82-1.82L7.183 9 .378 2.198a1.286 1.286 0 010-1.82z"
        fill="#fff"
        stroke="none"
      />
    </Svg>
  );
}
export function FezbookIcon({
  color = '#fff',
  focused: active,
  size = 25,
  style,
}: IconProps) {
  let props = {fill: color, stroke: color, height: size, width: size};
  return (
    <Svg viewBox="0 0 24 24" {...props}>
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0 12.067C0 18.033 4.333 22.994 10 24v-8.667H7V12h3V9.333c0-3 1.933-4.666 4.667-4.666.866 0 1.8.133 2.666.266V8H15.8c-1.467 0-1.8.733-1.8 1.667V12h3.2l-.533 3.333H14V24c5.667-1.006 10-5.966 10-11.933C24 5.43 18.6 0 12 0S0 5.43 0 12.067z"
        fill="#fff"
        stroke="none"
      />
    </Svg>
  );
}
export function InstagramIcon({
  color = '#fff',
  focused: active,
  size = 25,
  style,
}: IconProps) {
  let props = {fill: color, stroke: color, height: size, width: size};
  return (
    <Svg viewBox="0 0 22 22" {...props}>
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6.465.066C7.638.012 8.012 0 11 0c2.988 0 3.362.013 4.534.066 1.172.053 1.972.24 2.672.511.733.277 1.398.71 1.948 1.27.56.549.992 1.213 1.268 1.947.272.7.458 1.5.512 2.67C21.988 7.639 22 8.013 22 11c0 2.988-.013 3.362-.066 4.535-.053 1.17-.24 1.97-.512 2.67a5.396 5.396 0 01-1.268 1.949c-.55.56-1.215.992-1.948 1.268-.7.272-1.5.458-2.67.512-1.174.054-1.548.066-4.536.066-2.988 0-3.362-.013-4.535-.066-1.17-.053-1.97-.24-2.67-.512a5.396 5.396 0 01-1.949-1.268 5.392 5.392 0 01-1.269-1.948c-.271-.7-.457-1.5-.511-2.67C.012 14.361 0 13.987 0 11c0-2.988.013-3.362.066-4.534.053-1.172.24-1.972.511-2.672a5.396 5.396 0 011.27-1.948A5.392 5.392 0 013.794.577c.7-.271 1.5-.457 2.67-.511h.001zm8.98 1.98c-1.16-.053-1.508-.064-4.445-.064-2.937 0-3.285.011-4.445.064-1.073.049-1.655.228-2.043.379-.513.2-.88.437-1.265.822a3.412 3.412 0 00-.822 1.265c-.151.388-.33.97-.379 2.043-.053 1.16-.064 1.508-.064 4.445 0 2.937.011 3.285.064 4.445.049 1.073.228 1.655.379 2.043.176.477.457.91.822 1.265.355.365.788.646 1.265.822.388.151.97.33 2.043.379 1.16.053 1.507.064 4.445.064 2.938 0 3.285-.011 4.445-.064 1.073-.049 1.655-.228 2.043-.379.513-.2.88-.437 1.265-.822.365-.355.646-.788.822-1.265.151-.388.33-.97.379-2.043.053-1.16.064-1.508.064-4.445 0-2.937-.011-3.285-.064-4.445-.049-1.073-.228-1.655-.379-2.043-.2-.513-.437-.88-.822-1.265a3.413 3.413 0 00-1.265-.822c-.388-.151-.97-.33-2.043-.379zm-5.85 12.345a3.67 3.67 0 102.641-6.846 3.67 3.67 0 00-2.641 6.846zM7.002 7.002a5.654 5.654 0 117.996 7.996 5.654 5.654 0 01-7.996-7.996zm10.906-.814a1.336 1.336 0 10-1.834-1.944 1.336 1.336 0 001.834 1.944z"
        fill="#fff"
        stroke="none"
      />
    </Svg>
  );
}
export function GmilIcon({
  color = '#fff',
  focused: active,
  size = 25,
  style,
}: IconProps) {
  let props = {fill: color, stroke: color, height: size, width: size};
  return (
    <Svg viewBox="0 0 28 20" {...props}>
      <Path
        d="M26 0H2a2 2 0 00-2 2v16a2 2 0 002 2h24a2 2 0 002-2V2a2 2 0 00-2-2zm-2.2 2L14 8.78 4.2 2h19.6zM2 18V2.91l11.43 7.91a1 1 0 001.14 0L26 2.91V18H2z"
        fill="#fff"
        stroke="none"
      />
    </Svg>
  );
}
export function TeligramIcon({
  color = '#fff',
  focused: active,
  size = 25,
  style,
}: IconProps) {
  let props = {fill: color, stroke: color, height: size, width: size};
  return (
    <Svg viewBox="0 0 21 17" {...props}>
      <Path
        d="M18.665.11L.935 6.947C-.275 7.433-.268 8.108.713 8.41l4.552 1.42 10.532-6.645c.498-.303.953-.14.579.192l-8.533 7.701H7.84l.002.001-.314 4.692c.46 0 .663-.21.92-.46l2.212-2.15 4.599 3.397c.848.467 1.457.227 1.668-.785l3.019-14.228c.309-1.239-.473-1.8-1.282-1.434z"
        stroke="none"
        fill="#fff"
      />
    </Svg>
  );
}
export function TopIcon({
  color = '#fff',
  focused: active,
  size = 18,
  style,
}: IconProps) {
  let props = {fill: color, stroke: color, height: size, width: size};
  return (
    <Svg viewBox="0 0 18 10" {...props}>
      <Path
        d="M1 9l8-8 8 8"
        stroke="#A5A5A5"
        fill="none"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}
export function BottomIcon({
  color = '#fff',
  focused: active,
  size = 18,
  style,
}: IconProps) {
  let props = {fill: color, stroke: color, height: size, width: size};
  return (
    <Svg viewBox="0 0 18 10" {...props}>
      <Path
        d="M17 1L9 9 1 1"
        stroke="#A5A5A5"
        fill="none"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}
export function BellIcon({
  color = '#fff',
  focused: active,
  size = 20,
  style,
}: IconProps) {
  let props = {fill: color, stroke: color, height: size, width: size};
  return (
    <Svg viewBox="0 0 19 19" {...props}>
      <Path
        d="M7.179 17.922l3.562-1.512a1.999 1.999 0 01-3.562 1.512zM12.61.092c2.086 1.14 3.652 2.603 4.682 4.387 1.03 1.784 1.515 3.872 1.459 6.248a.75.75 0 01-1.5-.035c.05-2.112-.372-3.928-1.258-5.463-.886-1.535-2.25-2.808-4.102-3.82a.75.75 0 11.72-1.317h-.001zM3.46 4.513a5.824 5.824 0 017.6 2.746l.098.21 1.288 2.891 1.698 1.47c.093.08.173.174.266.325l.059.114a1.25 1.25 0 01-.637 1.65L3.505 18.488a1.251 1.251 0 01-1.755-1.143l-.001-2.343L.507 12.21A5.822 5.822 0 013.46 4.513zm-1.584 7.088l1.372 3.083v2.277l9.616-4.255-1.653-1.43-1.417-3.183-.085-.182a4.321 4.321 0 00-5.638-2.027 4.322 4.322 0 00-2.195 5.717zm10.497-7.908c.967.527 1.742 1.294 2.316 2.289.574.995.85 2.05.824 3.15a.75.75 0 01-1.5-.036c.02-.822-.185-1.605-.623-2.364-.438-.76-1.014-1.33-1.735-1.722a.75.75 0 11.718-1.317z"
        fill="#fff"
        stroke="none"
      />
    </Svg>
  );
}
export function RIcon({
  color = '#fff',
  focused: active,
  size = 20,
  style,
}: IconProps) {
  let props = {fill: color, stroke: color, height: size, width: size};
  return (
    <Svg viewBox="0 0 23 22" {...props}>
      <Path
        d="M21.042 10l-7-9v5C2.09 6 .71 15.678 1.042 21c.502-2.685.735-7 13-7v5l7-9z"
        stroke="#fff"
        strokeWidth={2}
        strokeLinecap="round"
        fill="none"
        strokeLinejoin="round"
      />
    </Svg>
  );
}
export function LIcon({
  color = '#fff',
  focused: active,
  size = 20,
  style,
}: IconProps) {
  let props = {fill: color, stroke: color, height: size, width: size};
  return (
    <Svg viewBox="0 0 23 22" {...props}>
      <Path
        d="M1 10l7-9v5c11.953 0 13.332 9.678 13 15-.502-2.685-.735-7-13-7v5l-7-9z"
        stroke="#fff"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </Svg>
  );
}
export function LeftIcon({
  color = '#fff',
  focused: active,
  size = 20,
  style,
}: IconProps) {
  let props = {fill: color, stroke: color, height: size, width: size};
  return (
    <Svg viewBox="0 0 10 18" {...props}>
      <Path
        d="M1 1l8 8-8 8"
        stroke="#fff"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </Svg>
  );
}
export function LeftTwoIcon({
  color = '#fff',
  focused: active,
  size = 20,
  style,
}: IconProps) {
  let props = {fill: color, stroke: color, height: size, width: size};
  return (
    <Svg viewBox="0 0 16 17" {...props}>
      <Path
        d="M13.386 8.25L7.166.302A.187.187 0 017.312 0h1.812a.38.38 0 01.295.143l5.983 7.645a.75.75 0 010 .926L9.42 16.357a.372.372 0 01-.295.143H7.313a.187.187 0 01-.148-.302l6.22-7.948zm-7.125 0L.04.302A.187.187 0 01.187 0H2a.38.38 0 01.295.143l5.984 7.645a.75.75 0 010 .926l-5.984 7.643A.372.372 0 012 16.5H.188a.187.187 0 01-.148-.302L6.26 8.25z"
        fill="#fff"
      />
    </Svg>
  );
}
export function CheckIcon({
  color = '#fff',
  focused: active,
  size = 50,
  style,
}: IconProps) {
  let props = {fill: color, stroke: color, height: size, width: size};
  return (
    <Svg viewBox="0 0 66 66" fill="none" {...props}>
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M32.542 0C14.57 0 0 14.57 0 32.542c0 17.971 14.57 32.541 32.542 32.541 17.971 0 32.541-14.57 32.541-32.541C65.083 14.57 50.513 0 32.542 0zm14.105 27.04a2.96 2.96 0 10-4.544-3.787l-12.72 15.261L22.8 31.93a2.958 2.958 0 00-4.183 4.183l8.875 8.875a2.96 2.96 0 004.363-.198l14.792-17.75z"
        fill="#049613"
      />
    </Svg>
  );
}
