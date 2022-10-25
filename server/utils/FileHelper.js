import fs from "fs";
import { join } from "path";

/**
 * @param target       타겟 디렉토리
 * @param permission   권한설정(숫자)
 * @description        파일, 폴더 처리 유틸리티 함수 (경로생성)
 */
const mkdirs = (target, permission = "0755") => {
  if (target === undefined || target === null) return;

  // 윈도우 디렉토리 '\' → '/'로 변경
  target = target.replace(/\\/gi, "/");
  const target_list = target.split("/");
  let dir = "";

  // 절대경로인 경우
  if (target.substring(0, 1) === "/") dir = "/";

  // 하드디스크 문자열로 시작하는 경우
  if (target_list[0].indexOf(":") > -1) target_list[0] += "/";

  target_list.map((v, i) => {
    dir = join(dir, v);

    if (v === ".") return;
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir);
      fs.chmodSync(dir, permission);
    }
  });
};

export default mkdirs;
