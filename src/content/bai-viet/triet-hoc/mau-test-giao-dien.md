---
title: "Bài Mẫu — Kiểm Thử Giao Diện Trang Đọc"
subtitle: "Một khảo luận dài dùng để thử mọi thành phần trình bày: tiêu đề, trích dẫn, danh sách, bảng, chú thích và bài liên quan"
author: "Ban Biên Tập AUGUSINH"
category: "Triết Học"
date: 2026-07-05
excerpt: "Bài viết mẫu, không nhằm truyền tải nội dung học thuật chính thức, mà để kiểm thử toàn bộ giao diện trang đọc: chữ khai bút, các cấp tiêu đề, khối trích dẫn, danh sách, bảng, chú thích cuối bài và khu vực bài viết liên quan."
image: "../../../assets/plato.webp"
heroImage: "../../../assets/plato-hero.png"
tags: ["kiểm thử", "giao diện", "mẫu", "typography"]
featured: false
draft: false
---

Trang đọc mà bạn đang xem cần trình bày tốt rất nhiều loại nội dung khác nhau: một đoạn mở đầu có chữ hoa khai bút, những cấp tiêu đề phân tầng rõ ràng, các khối trích dẫn trang trọng, danh sách có thứ tự và không thứ tự, bảng biểu, và cả hệ thống chú thích cuối bài. Đoạn văn đầu tiên này cố ý được viết dài để chữ cái đầu tiên có chỗ buông xuống hai ba dòng, giúp bạn quan sát hiệu ứng *drop-cap* kiểu thủ bản.

Mục đích của bài không phải là nói điều gì mới mẻ về triết học, mà là **làm cho mọi thành phần trình bày cùng xuất hiện một lần** để dễ soi lỗi. Vì thế, xin bạn đọc lượng thứ nếu mạch lập luận đôi chỗ chỉ mang tính minh hoạ.

![Sơ đồ đường phân chia của Plato — hình minh hoạ trong thân bài](/images/plato-divided-line.svg)

## Một Tiêu Đề Cấp Hai Để Mở Chương

Tiêu đề cấp hai (`h2`) đánh dấu những phần lớn của bài. Trên trang đọc, các tiêu đề `h2` và `h3` được gom vào Mục Lục (TOC); vì bài này có nhiều hơn hai tiêu đề như vậy, khối mục lục sẽ hiện ra để bạn kiểm tra khả năng cuộn tới đúng vị trí.

Dưới đây là một đoạn văn thường, đủ dài để thử độ dài dòng (measure) và khoảng cách dòng (leading) của phần thân bài. Một dòng chữ dễ đọc thường rơi vào khoảng sáu mươi đến bảy mươi lăm ký tự; nếu cột chữ quá rộng, mắt sẽ mỏi khi nhảy dòng, còn nếu quá hẹp thì nhịp đọc bị ngắt vụn. Đây chính là lý do phần prose được giới hạn chiều rộng thay vì tràn hết khung.

### Một Tiêu Đề Cấp Ba

Tiêu đề cấp ba (`h3`) dùng cho các mục con bên trong một chương. Chúng cũng xuất hiện trong Mục Lục nhưng ở cấp thụt vào, nhờ đó cấu trúc bài hiện ra rõ ràng.

#### Một Tiêu Đề Cấp Bốn

Tiêu đề cấp bốn (`h4`) là tầng sâu nhất thường dùng, hợp cho những chú giải nhỏ hay các nhánh phụ. Nó không vào Mục Lục nhưng vẫn cần giữ được phân cấp thị giác so với `h3` và thân bài.

## Khối Trích Dẫn

Khi cần nhấn mạnh một câu nói hoặc một đoạn nguồn, ta dùng khối trích dẫn:

> Con đã yêu Chúa quá muộn, ôi Sắc Đẹp vừa cổ xưa vừa mới mẻ, con đã yêu Chúa quá muộn! Này đây, Chúa ở bên trong mà con lại ở bên ngoài, và con đã tìm Chúa ở đó.
>
> — Thánh Augustinô, *Tự Thuật*, 10, XXVII-38

Khối trích dẫn cần đủ tương phản với thân bài để người đọc nhận ra ngay đây là tiếng nói khác, đồng thời không quá chói khiến mạch đọc bị gãy.

![Tolle, lege — "hãy cầm lấy mà đọc": khoảnh khắc hoán cải của Augustinô](/images/banners/TolleLege.webp)

Ảnh trên là một tấm rộng, dùng để kiểm tra cách trình bày ảnh khổ ngang trong thân bài và hiệu ứng phóng to (lightbox) khi nhấp vào.

## Danh Sách

Danh sách không thứ tự dùng để liệt kê những ý ngang hàng:

- **Ký ức** — nơi quá khứ được giữ lại và gọi về.
- **Trực giác hiện tại** — điểm mà tâm hồn đang chú mục.
- **Kỳ vọng** — hướng mà tâm hồn phóng tới tương lai.

Danh sách có thứ tự dùng khi trình tự quan trọng:

1. Đặt câu hỏi cho đúng, vì một câu hỏi sai dẫn tới cả chuỗi lời đáp lệch.
2. Phân biệt điều mình *biết* với điều mình *tưởng là biết*.
3. Kiểm nghiệm lại kết luận bằng chính kinh nghiệm nội tâm.

Có thể lồng danh sách con để thử phân cấp:

1. Bình diện vật lý
   - Chuyển động của thiên thể
   - Sự nối tiếp của các biến cố
2. Bình diện tâm thức
   - Sự căng giãn của chú tâm
   - Cảm thức về độ dài của khoảnh khắc

## Bảng Biểu

Bảng dùng để đối chiếu song song. Dưới đây là một bảng minh hoạ ba chiều kích của thời gian theo lối phân tích quen thuộc:

| Chiều kích | Quan năng của tâm hồn | Đối tượng |
|---|---|---|
| Quá khứ | Ký ức | Điều đã qua nhưng còn được giữ |
| Hiện tại | Chú tâm | Điều đang hiện diện |
| Tương lai | Kỳ vọng | Điều chưa tới nhưng đã được ngóng |

## Nhấn Mạnh Trong Dòng Và Liên Kết

Trong thân bài, ta thường cần **in đậm** để làm nổi một khái niệm cốt lõi, dùng *in nghiêng* cho tên tác phẩm như *Tự Thuật* hay *Thành Đô Thiên Chúa*, và chèn [một liên kết nội bộ](/bai-viet/) để kiểm tra màu sắc cùng gạch chân của đường dẫn. Đôi khi cũng cần tới `mã nội dòng` cho những thuật ngữ kỹ thuật.

## Một Đoạn Dài Có Chú Thích

Augustinô không xem thời gian như một dòng chảy bên ngoài mà như sự giãn nở của chính tâm hồn[^1]. Điều này đặt ông vào thế đối thoại với truyền thống trước đó, đồng thời mở đường cho những suy tư sau này về ký ức và ý thức[^2]. Khi ta đo một khoảng thời gian, thực ra ta đang đo dấu vết mà nó để lại trong tâm trí, chứ không phải bản thân khoảnh khắc đã trôi qua[^3].

Bởi vậy, nói rằng một biến cố "kéo dài" là nói về cường độ và độ bám của nó trong chú tâm của ta. Hai người cùng sống qua một giờ đồng hồ có thể cảm nhận độ dài rất khác nhau, và chính sự khác biệt ấy hé lộ bản chất nội tâm của thời gian.

## Kết Luận

Nếu mọi thành phần ở trên đều hiển thị đúng — chữ khai bút buông xuống gọn gàng, các cấp tiêu đề phân tầng rõ, khối trích dẫn trang trọng, danh sách và bảng thẳng hàng, chú thích nhảy đúng vị trí, và bên dưới là khu vực **Bài Viết Liên Quan** cùng back link ở đầu trang hoạt động trơn tru — thì giao diện trang đọc đã sẵn sàng.

Đây chỉ là bài mẫu; có thể xoá tệp `mau-test-giao-dien.md` bất cứ lúc nào mà không ảnh hưởng nội dung thật.

[^1]: Đây là chú thích thứ nhất, dùng để kiểm tra việc đánh số tự động và liên kết hai chiều giữa dấu tham chiếu và định nghĩa cuối bài.
[^2]: Chú thích có thể chứa cả *in nghiêng*, **in đậm** và [liên kết](/bai-viet/) để thử cách trình bày.
[^3]: Chú thích cuối cùng, xác nhận rằng danh sách chú thích đóng đúng ở cuối bài viết.
