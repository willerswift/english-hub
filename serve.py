#!/usr/bin/env python3
"""Máy chủ cục bộ cho English Hub.

Chạy:  python3 serve.py          (mặc định cổng 5173)
       python3 serve.py 8080     (chọn cổng khác)

Khác với `python3 -m http.server`: máy chủ này khai báo charset=utf-8 cho
file .md, .html, .css, .js nên tiếng Việt không bị vỡ font, và tắt cache
để mỗi lần sửa file là thấy ngay.
"""
import sys
from functools import partial
from http.server import SimpleHTTPRequestHandler, ThreadingHTTPServer

CHARSET = {
    ".md": "text/markdown; charset=utf-8",
    ".html": "text/html; charset=utf-8",
    ".css": "text/css; charset=utf-8",
    ".js": "application/javascript; charset=utf-8",
    ".json": "application/json; charset=utf-8",
    ".txt": "text/plain; charset=utf-8",
}


class Handler(SimpleHTTPRequestHandler):
    def guess_type(self, path):
        for ext, ctype in CHARSET.items():
            if str(path).lower().endswith(ext):
                return ctype
        return super().guess_type(path)

    def end_headers(self):
        self.send_header("Cache-Control", "no-store")
        super().end_headers()

    def log_message(self, fmt, *args):
        pass  # im lặng cho đỡ rối terminal


def main():
    port = int(sys.argv[1]) if len(sys.argv) > 1 else 5173
    srv = ThreadingHTTPServer(("127.0.0.1", port), partial(Handler, directory="."))
    print(f"English Hub đang chạy tại  http://localhost:{port}")
    print("Bấm Ctrl+C để dừng.")
    try:
        srv.serve_forever()
    except KeyboardInterrupt:
        print("\nĐã dừng.")


if __name__ == "__main__":
    main()
