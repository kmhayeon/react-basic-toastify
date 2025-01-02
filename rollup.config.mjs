import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import postcss from 'rollup-plugin-postcss';
import typescript from '@rollup/plugin-typescript';
import dts from 'rollup-plugin-dts';

export default [
  // JavaScript/TypeScript 파일 번들링
  {
    input: 'src/index.tsx', // 엔트리 파일
    output: [
      {
        file: 'dist/index.js',
        format: 'cjs', // CommonJS 포맷
        sourcemap: true,
      },
      {
        file: 'dist/index.esm.js',
        format: 'esm', // ES Module 포맷
        sourcemap: true,
      },
    ],
    plugins: [
      // 외부 의존성 제외
      peerDepsExternal(),
      // Node.js 모듈 및 확장자 처리
      resolve({
        extensions: ['.js', '.jsx', '.ts', '.tsx'], // 처리할 확장자
      }),
      // CommonJS 파일 지원
      commonjs(),
      // CSS 모듈 처리
      postcss({
        modules: true, // CSS 모듈 활성화
        extensions: ['.css'], // CSS 파일 처리
      }),
      // TypeScript 파일 처리
      typescript({
        tsconfig: './tsconfig.json', // tsconfig.json 경로
        declaration: true, // 타입 선언 파일 생성
        declarationDir: 'dist', // 타입 파일 출력 디렉토리
      }),
    ],
  },
  // 타입 선언 파일 처리
  {
    input: 'dist/index.d.ts', // 경로를 올바르게 수정
    output: [{ file: 'dist/index.d.ts', format: 'esm' }],
    plugins: [dts()],
  },
];
