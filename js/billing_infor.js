


var theCity= {
	/*TP Hồ Chí Minh*/
	485:['','Quận 1','Quận 2','Quận 3','Quận 4','Quận 5','Quận 6','Quận 7','Quận 8','Quận 9','Quận 10','Quận 11','Quận 12','Quận Gò Vấp','Quận Bình Thạnh','Quận Tân Bình','Quận Tân Phú','Quận Phú Nhuận','Quận 10','Quận 10','Quận Bình Tân','Quận Củ Chi','Quận Hóc Môn','Quận Bình Chánh','Quận Nhà Bè','Quận Cần Giờ'],
	/*TP Hải Phòng*/
	486:['','Quận Hồng Bàng','Quận Lê Chân','Quận Ngô Quyền','Quận Kiến An','Quận Hải An','Quận Đồ Sơn','Quận Dương Kinh','Huyện An Lão','Huyện Kiến Thuỵ','Huyện Thủy Nguyên','Huyện An Dương','Huyện Tiên Lãng','Huyện Vĩnh Bảo','Huyện Cát Hải','Huyện Bạch Long Vĩ','Huyện Dương Kinh'],
	/*TP Hà Nội*/
	487:['','Quận Ba Đình','Quận Hoàn Kiếm','Quận Hai Bà Trưng','Quận Đống Đa','Quận Tây Hồ','Quận Cầu Giấy','Quận Thanh Xuân','Quận Hoàng Mai','Quận Long Biên','Quận Hà Đông','Huyện Từ Liêm','Huyện Thanh Trì','Huyện Gia Lâm','Huyện Đông Anh','Huyện Sóc Sơn','Thị xã Sơn Tây','Huyện Ba Vì','Huyện Phúc Thọ','Huyện Thạch Thất','Huyện Quốc Oai','Huyện Chương Mỹ','Huyện Đan Phượng','Huyện Hoài Đức','Huyện Thanh Oai','Huyện Mỹ Đức','Huyện Ứng Hoà','Huyện Thường Tín','Huyện Phú Xuyên','Huyện Mê Linh'],
	/*TP Đã Nẵng*/
	488:['','Quận Hải Châu','Quận Thanh Khê','Quận Sơn Trà','Quận Ngũ Hành Sơn','Quận Liên Chiểu','Quận Hoà Vang','Quận Cẩm Lệ'],
	/*Tỉnh Hưng Yên*/
	489:['','Thị xã Hưng Yên','Huyện Kim Động','Huyện Ân Thi','Huyện Khoái Châu','Huyện Yên Mỹ','Huyện Tiên Lữ','Huyện Phù Cừ','Huyện Mỹ Hào','Huyện Văn Lâm','Huyện Văn Giang'],
	/*Tỉnh Hải Dương*/
	490:['','Thành phố Hải Dương','Huyện Chí Linh','Huyện Nam Sách','Huyện Kinh Môn','Huyện Gia Lộc','Huyện Tứ Kỳ','Huyện Thanh Miện','Huyện Ninh Giang','Huyện Cẩm Giàng','Huyện Thanh Hà','Huyện Kim Thành','Huyện Bình Giang'],
	/*Tỉnh Quảng Ninh*/
	491:['','TP. Hạ Long','Thị xã Cẩm Phả','Thị xã Uông Bí','Thị xã Móng Cái','Huyện Bình Liêu','Huyện Đầm Hà','Huyện Hải Hà','Huyện Tiên Yên','Huyện Ba Chẽ','Huyện Đông Triều','Huyện Yên Hưng','Huyện Hoành Bồ','Huyện Vân Đồn','Huyện Vân Đồn'],
	/*Tỉnh Bắc Ninh*/
	492:['','Thành phố Bắc Ninh','Huyện Yên Phong','Huyện Quế Võ.','Huyện Tiên Du','Huyện Từ Sơn','Huyện Thuận Thành','Huyện Gia Bình','Huyện Lương Tài'],
	/*Tỉnh Bắc Giang*/
	493:['','Thành phố Bắc Giang','Huyện Yên Thế','Huyện Lục Ngạn','Huyện Sơn Động','Huyện Lục Nam','Huyện Tân Yên','Huyện Hiệp Hoà','Huyện Lạng Giang','Huyện Việt Yên','Huyện Yên Dũng'],
	/*Tỉnh Lạng Sơn*/
	494:['','Thành phố Lạng Sơn','Huyện Tràng Định','Huyện Bình Gia','Huyện Văn Lãng','Huyện Bắc Sơn','Huyện Văn Quan','Huyện Cao Lộc','Huyện Lộc Bình','Huyện Chi Lăng','Huyện Đình Lập','Huyện Hữu Lũng'],
	/*Tỉnh Thái Nguyên*/
	495:['','TP.Thái Nguyên','Thị xã Sông Công','Huyện Định Hoá','Huyện Phú Lương','Huyện Võ Nhai','Huyện Đại Từ','Huyện Đồng Hỷ','Huyện Phú Bình','Huyện Phổ Yên'],
	/*Tỉnh Bắc Kạn*/
	496:['','Thị xã Bắc Kạn','Huyện Chợ Đồn','Huyện Bạch Thông','Huyện Na Rì','Huyện Ngân Sơn','Huyện Ba Bể','Huyện Chợ Mới','Huyện Pác Nặm'],
	/*Tỉnh Cao Bằng*/
	497:['','Thị xã Cao Bằng','Huyện Bảo Lạc','Huyện Thông Nông','Huyện Thông Nông','Huyện Trà Lĩnh','Huyện Trùng Khánh','Huyện Nguyên Bình','Huyện Hoà An','Huyện Quảng Uyên','Huyện Thạch An','Huyện Hạ Lang','Huyện Bảo Lâm','Huyện Phục Hoà'],
	/*Tỉnh Vĩnh Phúc*/
	498:['','Thành phố Vĩnh Yên','Huyện Tam Dương','Huyện Lập Thạch','Huyện Vĩnh Tường','Huyện Yên Lạc','Huyện Bình Xuyên','Huyện Mê Linh','Thị xã Phúc Yên','Huyện Tam Đảo'],
	/*Tỉnh Phú Thọ*/
	499:['','TP. Việt Trì','Thị xã Phú Thọ','Huyện Đoan Hùng','Huyện Thanh Ba','Huyện Hạ Hoà','Huyện Cẩm Khê','Huyện Yên Lập','Huyện Thanh Sơn','Huyện Phù Ninh','Huyện Lâm Thao','Huyện Tam Nông','Huyện Thanh Thủy','Huyện Tân Sơn'],
	/*Tỉnh Tuyên Quang*/
	500:['','Thành phố Tuyên Quang','Huyện Na Hang','Huyện Chiêm Hoá','Huyện Hàm Yên','Huyện Yên Sơn','Huyện Sơn Dương'],
	/*Tỉnh Hà Giang*/
	501:['','Thành phố Hà Giang','Huyện Đồng Văn','Huyện Mèo Vạc','Huyện Yên Minh','Huyện Quản Bạ','Huyện Vị Xuyên','Huyện Bắc Mê','Huyện Hoàng Su Phì','Huyện Xín Mần','Huyện Bắc Quang','Huyện Quang Bình'],
	/*Tỉnh  Yên Bái*/
	502:['','Thành phố Yên Bái','Thị xã Nghĩa Lộ','Huyện Văn Yên','Huyện Yên Bình','Huyện Mù Cang Chải','Huyện Văn Chấn','Huyện Trấn Yên','Huyện Trạm Tấu','Huyện Lục Yên'],
	/*Lào Cai*/
	503:['','Thành phố Lào Cai','Huyện Xi Ma Cai','Huyện Bát Xát','Huyện Bảo Thắng','Huyện Sa Pa','Huyện Văn Bàn','Huyện Bảo Yên','Huyện Bắc Hà','Huyện Mường Khương'],
	/*Hòa Bình*/
	504:['','Thành phố Hoà Bình','Huyện Đà Bắc','Huyện Mai Châu','Huyện Tân Lạc','Huyện Lạc Sơn','Huyện Kỳ Sơn','Huyện Lương Sơn','Huyện Kim Bôi','Huyện Lạc Thuỷ','Huyện Yên Thuỷ','Huyện Cao Phong'],
	/*Sơn La*/
	505:['','Thị xã Sơn La','Huyện Quỳnh Nhai','Huyện Mường La','Huyện Thuận Châu','Huyện Bắc Yên','Huyện Phù Yên','Huyện Mai Sơn','Huyện Yên Châu','Huyện Sông Mã','Huyện Mộc Châu','Huyện Sốp Cộp'],
	/*Điện Biên*/
	506:['','TP. Điện Biên Phủ','Thị xã Mường Lay','Huyện Điện Biên','Huyện Tuần Giáo','Huyện Mường Chà','Huyện Tủa Chùa','Huyện Điện Biên Đông','Huyện Mường Nhé','Huyện Mường Ảng'],
	/*Lai Châu*/
	507:['','Thị xã Lai Châu','Huyện Tam Đường','Huyện Phong Thổ','Huyện Sìn Hồ','Huyện Mường Tè','Huyện Than Uyên'],
	/*Hà Nam*/
	508:['','Thị xã Phủ Lý','Huyện Duy Tiên','Huyện Kim Bảng','Huyện Lý Nhân','Huỵện Thanh Liêm','Huyện Bình Lục'],
	/*Thài Bình*/
	509:['','Thành phố Thái Bình','Huyện Quỳnh Phụ','Huyện Hưng Hà','Huyện Đông Hưng','Huyện Vũ Thư','Huyện Kiến Xương','Huyện Tiền Hải','Huyện Thái Thuỵ'],
	/*Nam Định*/
	510:[{id:1, ten: 'Thành phố Nam Định', parentId:null},'','Thành phố Nam Định','Huyện Hải Hậu','Huyện Nam Ninh','Huyện Nghĩa Hưng','Huyện Vụ Bản','Huyện Xuân Thủy','Huyện Ý Yên'],
	/*Ninh Bình*/
	511:['','Thành phố Ninh Bình','Thị xã Tam Điệp','Huyện Nho Quan','Huyện Gia Viễn','Huyện Hoa Lư','Huyện Yên Mô','Huyện Kim Sơn','Huyện Yên Khánh'],
	/*Thanh Hóa*/
	512:['','Thành phố Thanh Hoá','Thị xã Bỉm Sơn','Thị xã Sầm Sơn','Huyện Quan Hoá','Huyện Quan Sơn','Huyện Mường Lát','Huyện Bá Thước','Huyện Thường Xuân','Huyện Như Xuân','Huyện Như Thanh','Huyện Lang Chánh','Huyện Ngọc Lặc','Huyện Thạch Thành','Huyện Cẩm Thủy','Huyện Thọ Xuân','Huyện Vĩnh Lộc','Huyện Thiệu Hoá','Huyện Triệu Sơn','Huyện Nông Cống','Huyện Đông Sơn','Huyện Hà Trung','Huyện Hoằng Hoá','Huyện Nga Sơn','Huyện Hậu Lộc','Huyện Quảng Xương','Huyện Tĩnh Gia','Huyện Yên Định'],
	/*Nghệ An*/
	513:['','Thành phố Vinh','Huyện Anh Sơn','Huyện Con Cuông','Huyện Diễn Châu','Huyện Đô Lương','Huyện Hưng Nguyên','Huyện Kỳ Sơn','Huyện Nam Đàn','Huyện Nghi Lộc','Huyện Nghĩa Đàn','Huyện Quế Phong','Huyện Quỳ Châu','Huyện Quỳ Hợp','Huyện Quỳnh Lưu','Huyện Tân Kỳ','Huyện Thanh Chương','Huyện Tương Dương','Huyện Yên Thành'],
	/*Hà Tĩnh*/
	514:['','Thị Xã Hà Tĩnh','Huyện Cẩm Xuyên','Huyện Can Lộc','Huyện Đức Thọ','Huyện Hương Khê','Huyện Hương Sơn','Huyện Kỳ Anh','Huyện Nghi Xuân','Huyện Thạch Hà'],
	/*Quảng Bình*/
	515:['','Thành phố Đồng Hới','Huyện Tuyên Hoá','Huyện Minh Hoá','Huyện Quảng Trạch','Huyện Bố Trạch','Huyện Quảng Ninh','Huyện Lệ Thuỷ'],
	/*Quảng Trị*/
	516:['','Thị xã Đông Hà','Thị xã Quảng Trị','Huyện Vĩnh Linh','Huyện Gio Linh','Huyện Cam Lộ','Huyện Triệu Phong','Huyện Hải Lăng','Huyện Hướng Hoá','Huyện Đăk Rông','Huyện đảo Cồn cỏ'],
	/*Huế*/
	517:['','TP. Huế','Huyện Phong Điền','Huyện Quảng Điền','Huyện Hương Trà','Huyện Phú Vang','Huyện Hương Thuỷ','Huyện Phú Lộc','Huyện Nam Đông','Huyện A Lưới'],
	/*Quảng Nam*/
	518:['','Thành phố Tam Kỳ','Thị xã Hội An','Huyện Duy Xuyên','Huyện Điện Bàn','Huyện Đại Lộc','Huyện Quế Sơn','Huyện Hiệp Đức','Huyện Thăng Bình','Huyện Núi Thành','Huyện Tiên Phước','Huyện Bắc Trà My','Huyện Đông Giang','Huyện Nam Giang','Huyện Phước Sơn','Huyện Nam Trà My','Huyện Tây Giang','Huyện Phú Ninh'],
	/*Quảng Ngãi*/
	519:['','Thành phố Quảng Ngãi','Huyện Lý Sơn','Huyện Bình Sơn','Huyện Trà Bồng','Huyện Sơn Tịnh','Huyện Sơn Hà','Huyện Tư Nghĩa','Huyện Nghĩa Hành','Huyện Minh Long','Huyện Mộ Đức','Huyện Đức Phổ','Huyện Ba Tơ','Huyện Sơn Tây','Huyện Tây Trà','Huyện'],
	/*Kon Tum*/
	520:['','Thị xã KonTum','Huyện Đăk Glei','Huyện Ngọc Hồi','Huyện Đăk Tô','Huyện Sa Thầy','Huyện Kon Plong','Huyện Đăk Hà','Huyện Kon Rộy','Huyện Tu Mơ Rông'],
	/*Bình Định*/
	521:['','Thành phố Quy Nhơn','Huyện An Lão','Huyện Hoài Ân','Huyện Hoài Nhơn','Huyện Phù Mỹ','Huyện Phù Cát','Huyện Vĩnh Thạnh','Huyện Tây Sơn','Huyện Vân Canh','Huyện An Nhơn','Huyện Tuy Phước'],
	/*Gia Lai*/
	522:['','Thành phố Pleiku','Huyện Chư Păh','Huyện Chư Păh','Huyện Kbang','Thị xã An Khê','Huyện Kông Chro','Huyện Đức Cơ','Huyện Chưprông','Huyện Chư Sê','Huyện Ayunpa','Huyện Krông Pa','Huyện Ia Grai','Huyện Đăk Đoa','Huyện Ia Pa','Huyện Đăk Pơ','Huyện Phú Thiện'],
	/*Phú Yên*/
	523:['','Thị xã Tuy Hoà','Huyện Đồng Xuân','Huyện Sông Cầu','Huyện Tuy An','Huyện Sơn Hoà','Huyện Sông Hinh','Huyện Đông Hoà','Huyện Phú Hoà','Huyện Tây Hoà'],
	/*Đắk Lắk*/
	524:['','Thành phố Buôn Ma Thuột','Huyện Ea H Leo','Huyện Krông Buk','Huyện Krông Năng','Huyện Ea Súp','Huyện Cư M gar','Huyện Krông Pắc','Huyện Ea Kar','Huyện M`Đrăk','Huyện Krông Ana','Huyện Krông Bông','Huyện Lăk','Huyện Buôn Đôn','Huyện Cư Kuin'],
	/*Đăk Nông*/
	525:['','Thị xã Gia Nghĩa','Huyện Dăk RLấp','Huyện Dăk Mil','Huyện Cư Jút','Huyện Dăk Song','Huyện Krông Nô','Huyện Dăk GLong','Huyện Tuy Đức'],
	/*Khánh Hòa*/
	526:['','Thành phố Nha Trang','Huyện Vạn Ninh','Huyện Ninh Hoà','Huyện Diên Khánh','Huyện Khánh Vĩnh','Huyện Cam Ranh','Huyện Khánh Sơn','Huyện Trường Sa','Huyện Cam Lâm'],
	/*Ninh Thuận*/
	527:['','Thành phố Phan Rang-Tháp Chàm','Huyện Ninh Sơn','Huyện Ninh Phước','Huyện Bác Ái','Huyện Thuận Bắc','Huyện Ninh Hải'],
	/*Lâm Đồng*/
	528:['','Thành phố Đà Lạt','Thành phố Đà Lạt','Huyện Đức Trọng','Huyện Di Linh','Huyện Đơn Dương','Huyện Lạc Dương','Huyện Lạc Dương','Huyện Đạ Tẻh','Huyện Cát Tiên','Huyện Lâm Hà','Huyện Bảo Lâm','Huyện Đam Rông'],
	/*Vũng Tàu*/
	529:['','Thành phố Vũng Tàu','Thị xã Bà Rịa','Huyện Xuyên Mộc','Huyện Long Điền','Huyện Côn Đảo','Huyện Tân Thành','Huyện Châu Đức','Huyện Đất Đỏ'],
	/*Bình Thuận*/
	530:['','Thành phố Phan Thiết','Huyện Tuy Phong','Huyện Bắc Bình','Huyện Hàm Thuận Bắc','Huyện Hàm Thuận Nam','Huyện Hàm Tân','Huyện Đức Linh','Huyện Tánh Linh','Huyện đảo Phú Quý','Thị xã LaGi'],
	/*Đồng Nai*/
	531:['','Thành phố Biên Hoà','Huyện Vĩnh Cửu','Huyện Tân Phú','Huyện Định Quán','Huyện Thống Nhất','Thị xã Long Khánh','Huyện Xuân Lộc','Huyện Long Thành','Huyện Nhơn Trạch','Huyện Trảng Bom','Huyện Cẩm Mỹ'],
	/*Bình Dương*/
	532:['','Thị xã Thủ Dầu Một','Huyện Bến Cát','Huyện Tân Uyên','Huyện Thuận An','Huyện Dĩ An','Huyện Phú Giáo','Huyện Dầu Tiếng'],
	/*Bình Phước*/
	533:['','Thị xã Đồng Xoài','Huyện Đồng Phú','Huyện Chơn Thành','Huyện Bình Long','Huyện Lộc Ninh','Huyện Bù Đốp','Huyện Phước Long','Huyện Bù Đăng'],
	/*Tây Ninh*/
	534:['','Thị xã Tây Ninh','Huyện Tân Biên','Huyện Tân Châu','Huyện Dương Minh Châu','Huyện Châu Thành','Huyện Hoà Thành','Huyện Bến Cầu','Huyện Gò Dầu','Huyện Trảng Bàng'],
	/*Long  An*/
	535:['','Thị xã Tân An','Huyện Vĩnh Hưng','Huyện Mộc Hoá','Huyện Tân Thạnh','Huyện Thạnh Hoá','Huyện Đức Huệ','Huyện Đức Hoà','Huyện Bến Lức','Huyện Thủ Thừa','Huyện Châu Thành','Huyện Tân Trụ','Huyện Cần Đước','Huyện Cần Giuộc','Huyện Tân Hưng'],
	/*Tiền Giang*/
	536:['','Thành phố Mỹ Tho','Thị xã Gò Công','Huyện Cái Bè','Huyện Cái Bè','Huyện Châu Thành','Huyện Chợ Gạo','Huyện Gò Công Tây','Huyện Gò Công Đông','Huyện Tân Phước'],
	/*Đồng Tháp*/
	537:['','Thành phố Cao Lãnh','Thị xã Sa Đéc','Huyện Tân Hồng','Huyện Hồng Ngự','Huyện Tam Nông','Huyện Thanh Bình','Huyện Cao Lãnh','Huyện Lấp Vò','Huyện Tháp Mười','Huyện Lai Vung','Huyện Châu Thành'],
	/*An Giang*/
	538:['','Thành phố Long Xuyên','Thị xã Châu Đốc','Huyện An Phú','Huyện Tân Châu','Huyện Phú Tân','Huyện Tịnh Biên','Huyện Tri Tôn','Huyện Châu Phú','Huyện Chợ Mới','Huyện Châu Thành','Huyện Thoại Sơn'],
	/*Vĩnh Long*/
	539:['','Thị xã Vĩnh Long','Huyện Long Hồ','Huyện Mang Thít','Huyện Bình Minh','Huyện Tam Bình','Huyện Trà Ôn','Huyện Vũng Liêm','Huyện Bình Tân'],
	/*Cần Thơ*/
	540:[{id:2, ten: 'Thành phố Nam Định', parentId:1},'','Quận Ninh Kiều','Quận Bình Thuỷ','Quận Cái Răng','Quận Ô Môn','Huyện Phong Điền','Huyện Cờ Đỏ','Huyện Vĩnh Thạnh','Huyện Thốt Nốt'],
	/*Hậu Giang*/
	541:['','Thành phố Vị Thanh','Huyện Vị Thuỷ','Huyện Long Mỹ','Huyện Phụng Hiệp','Huyện Châu Thành','Huyện Châu Thành A','Thị xã Ngã Bảy'],
	/*Kiên Giang*/
	542:['','Thành phố Rạch Giá','Thị xã Hà Tiên','Huyện Kiên Lương','Huyện Hòn Đất','Huyện Tân Hiệp','Huyện Châu Thành','Huyện Giồng Riềng','Huyện Gò Quao','Huyện An Biên','Huyện An Minh','Huyện Vĩnh Thuận','Huyện Phú Quốc','Huyện Kiên Hải','Huyện U minh Thượng'],
	/*Bến Tre*/
	543:['','Thị xã Bến Tre','Huyện Châu Thành','Huyện Chợ Lách','Huyện Mỏ Cày','Huyện Giồng Trôm','Huyện Bình Đại','Huyện Ba Tri','Huyện Thạnh Phú'],
	/*Trà Vinh*/
	544:['','Thị xã Trà Vinh','Huyện Càng Long','Huyện Cầu Kè','Huyện Tiểu Cần','Huyện Châu Thành','Huyện Trà Cú','Huyện Cầu Ngang','Huyện Duyên Hải'],
	/*Sóc Trăng*/
	545:['','Thành phố Sóc Trăng','Huyện Kế Sách','Huyện Mỹ Tú','Huyện Mỹ Xuyên','Huyện Thạnh Trị','Huyện Long Phú','Huyện Vĩnh Châu','Huyện Cù Lao Dung','Huyện Ngã Năm','Huyện Châu Thành','Huyện Trần Đề'],
	/*Bạc Liêu*/
	546:['',' Thành phố Bạc Liêu','thị xã Giá Rai','Huyện Hồng Dân','Huyện Phước Long','Huyện Vĩnh Lợi','Huyện Đông Hải','Huyện Hòa Bình'],
	/*Cà Mau*/
	547:['','Thành phố Cà Mau','Huyện Thới Bình','Huyện U Minh','Huyện Trần Văn Thời','Huyện Cái Nước','Huyện Đầm Dơi','Huyện Ngọc Hiển','Huyện Năm Căn','Huyện Phú Tân'],

}
 var city = document.getElementById('city_list');
 var county = document.getElementById('county_list');

 city.addEventListener('change',function(){

 	var city_option = theCity[this.value];
 	console.log(county);
 	while(county.options.length > 0){
 		county.options.remove(0);
 	}

 	Array.from(city_option).forEach(function(el){

 		let option  = new Option(el,el);

 		county.appendChild(option);

 	});

 });
                      
/*=====================*/

var xa_phuong={

	"Huyện Chương Mỹ":['Thị trấn Chúc Sơn','Thị trấn Xuân Mai','Xã Đại Yên','Xã Đồng Lạc','Xã Đồng Phú','Xã Đông Phương Yên','Xã Đông Sơn','Xã Hòa Chính','Xã Hoàng Diệu','Xã Hoàng Văn Thụ','Xã Hồng Phong','Xã Hợp Đồng','Xã Hữu Văn','Xã Lam Điền','Xã Mỹ Lương','Xã Nam Phương Tiến','Xã Ngọc Hòa','Xã Phú Nam An','Xã Phú Nghĩa','Xã Phụng Châu','Xã Quảng Bị','Xã Tân Tiến','Xã Thanh Bình','Xã Thượng Vực','Xã Thụy Hương','Xã Thủy Xuân Tiên','Xã Tiên Phương','Xã Tốt Động','Xã Trần Phú','Xã Trung Hòa','Xã Trường Yên','Xã Văn Võ'],
}

var county = document.getElementById('county_list');
var  xaPhuong  = document.getElementById('phuong_xa_list');

county.addEventListener('change',function(){

	var  county_option = xa_phuong[this.value];

	while(xaPhuong.options.length > 0){
		xaPhuong.options.remove(0);
	}

	Array.from(county_option).forEach(function(el){

		let option  = new Option(el,el);

		xaPhuong.appendChild(option);

	});

});

/*=====================*/

$(document).ready(function(){

	$('.ip_visa').click(function(){

		$('.container_pay_credit').css('display','block');
		$(".click_opcity").css('display','block');
	});

	$('.pay_atm').click(function(){

		$('.container_pay_atm').css('display','block');
		$(".click_opcity").css('display','block');
	});

	$('.circle').click(function(){

		$('.container_pay_credit').css('display','none');
		$('.container_pay_atm').css('display','none');
		$('.container_notification').css('display','none');
		$('.container_notification_2').css('display','none');
		$('.container_notification_3').css('display','none');
		$(".click_opcity").css('display','none');
		$('.li-bank').removeClass('active');



		// $('.visaReg').removeAttr('value');
		// $('.check_tenThe').removeAttr('value');
		// $('.expiry_date').removeAttr('value');
		// $('.code_smail').removeAttr('value');


		$('.visaReg').val('');
		$('.check_tenThe').val('');  
		$('.visaRexpiry_dateeg').val('');
		$('.expiry_date').val('');    
		$('.code_smail').val('');
		
		$('.fix').text('');
		$('.fix_name').text('');
		
	});

	$('.btn-pay-box').click(function(){
		$('.container_pay_atm').css('display','none');
		$('.container_pay_credit').css('display','none');
		$(".click_opcity").css('display','none');

	});

	$('.btn_nofi').click(function(){
		$('.container_notification').css('display','none');
		$('.container_notification_2').css('display','none');
		$('.container_notification_3').css('display','none');
		$(".click_opcity").css('display','none');
	});


	$('.li-bank').click(function(){
		$('.li-bank').removeClass('active');
		$(this).addClass('active');
	});

	$('.btn-continue').on('click', function(){

		var btnOder = new Array();
			btnOder[1] = $('.check_name').val();
			btnOder[2] = $('.check_email').val();
			btnOder[3] = $('.check_phone').val();
			btnOder[4] = $('.check_phone_again').val();
			btnOder[5] = $('.check_address').val();
			btnOder[6] = $('.check_tinhTP').val();
			btnOder[7] = $('.check_quanHuyen').val();
			btnOder[8] = $('.check_xaPhuonng').val();
			btnOder[9] = $('.visaReg').val();
			btnOder[10] = $('.check_tenThe').val();
			btnOder[11] = $('.expiry_date').val();
			btnOder[12] = $('.code_smail').val();


		// const hasClass = document.querySelector(".wrap_pay_atm");

		// hasClass.classList.contains("active");
		//  console.log(hasClass);
// console.log('adadad', $('.active').hasClass('bank'));

		if(!btnOder[1] || !btnOder[2] || !btnOder[3] || !btnOder[4] || !btnOder[5] || !btnOder[6] || !btnOder[7] || !btnOder[8] ){
			$(".container_notification").css('display','block');
			$(".click_opcity").css('display','block');

			// if($('.ip_visa').click(function(){}) && btnOder[8]== "" ){
			// 	$(".container_notification").css('display','block');
			// 	$(".click_opcity").css('display','block');
			// }
			// else{
			// 	$(".container_notification").css('display','none');
			// 	$(".click_opcity").css('display','none');
			// }


		}
		else if($('.error_mes').css('display') == 'block'){
			$(".container_notification").css('display','block');
			$(".click_opcity").css('display','block');
		}
		else if($('.ip_visa').is(':checked') && (!btnOder[9] || !btnOder[10] || !btnOder[11] || !btnOder[12])) { 
			$(".container_notification_2").css('display','block');
			$(".click_opcity").css('display','block');

		}
		else if($('.pay_atm').is(':checked') && !$('.active').hasClass('li-bank') ){
			$(".container_notification_3").css('display','block');
			$(".click_opcity").css('display','block');
		
		}
		else{
			$(".container_notification").css('display','none');
			$(".click_opcity").css('display','none');
			window.location.href = "order.html";
		}

		

	});

	// function checkName(letters){
	// 	var regex = /^[a-zA-Z]+$/;
	// 	if(regex.test(letters.firstName.value) == false){
	// 		alert("nhap sai");
	// 		letters.firstName.focus();
	// 		return false;
	// 	}
	// 	if(letters.firstName.value == " "){
	// 		alert("ban chua nhap thong tin");
	// 		letters.firstName.focus();
	// 		return false;
	// 	}
	// 	return true;      
	// }

	$('.check_name').change(function(){
		var input = $(this).val();
	    var regex = /^[ a-zA-ZÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ]+$/;
	    if(regex.test(input)) {
			$('.check').text('');
			
	    }else {
			$('.check').text('Không chính xác');
			$('.check').removeClass('error_mes');
			$('.check').addClass('error_mes');
			return false;
			
	    }
	});

	$('.check_email').change(function(){
		var input = $(this).val();
	    var regex = /^\w+@[a-zA-z]{3,}\.com$/i;
	    if(regex.test(input)) {
			$('.check_mail').text('');
			
	    }else {
			$('.check_mail').text('Không chính xác');
			$('.check_mail').removeClass('error_mes');
			$('.check_mail').addClass('error_mes');
			return false;
			
	    }
	});

	$('.check_phone').change(function(){
		var input = $(this).val();
	    var regex = /^\d{3}[-\s]?\d{3}[-\s]?\d{4}$/;
	    if(regex.test(input)) {
			$('.check_phone_number').text('');
			
	    }else {
			$('.check_phone_number').text('Không chính xác');
			$('.check_phone_number').removeClass('error_mes');
			$('.check_phone_number').addClass('error_mes');
			return false;
			
	    }
	});

	
	$('.check_phone_again').change(function(){
		var phoneNumber = $('.check_phone').val();
		var again = $('.check_phone_again').val();
		if(again == phoneNumber){
			$('.check_again_phone_number').text('');
			
		}

		else{
			$('.check_again_phone_number').text('Không chính xác');
			$('.check_again_phone_number').removeClass('error_mes');
			$('.check_again_phone_number').addClass('error_mes');
			return false;
		}
	});
	
	$('.visaReg').change(function(){

		var input = $(this).val();
		var regex = /^(?:4[0-9]{12}(?:[0-9]{3})?)$/;
		if(regex.test(input)){
			$('.fix').text('');
	    }else {
			$('.fix').text('Số thẻ không hợp lệ');
			$('.fix').removeClass('error_mes');
			$('.fix').addClass('error_mes');
			return false;
		}
	});

	$('.check_tenThe').change(function(){
		var input = $(this).val();
	    var regex = /^[ a-zA-Z]+$/;
	    if(regex.test(input)) {
			$('.fix_name').text('');
	    }else {
			$('.fix_name').text('Tên thẻ không hợp lệ');
			$('.fix_name').removeClass('error_mes');
			$('.fix_name').addClass('error_mes');
			return false;
			
	    }
	});


	// $('.check_name').each(function(){
	//     var input = $(this).val();
	//     var regex = new RegExp("^[a-zA-Z]+$");
	//     if(regex.test(input)) {
	//         alert("true");
	//     }else {
	//         alert("false");
	//         return false;
	//     }
	// });

	// function validate(){
	// 	var usernamePattern = /[a-z][a-z0-9]{7,29}/i
	// 	function usernameChangeHandler(userInput){
	// 		if(usernamePattern.test(userInput)){
	// 			showGood()
	// 		} else{
	// 			showBad()
	// 		}
	// 	}
		
	// }



	// function check(){
	// 	var data = new Array();
	// 		data[0] = document.getElementById('firstName').value;
	// 		data[1] = document.getElementById('lastName').value;
	// 		data[2] = document.getElementById('email').value;
	// 		data[3] = document.getElementById('number_phone').value;
	// 		data[4] = document.getElementById('again_number_phone').value;
	// 		data[5] = document.getElementById('address').value;

	// 	var myerror = new Array();
	// 		myerror[0] = "<span style='color:red,font-weight:bold'>Bạn chưa nhập tên</span>";
	// 		myerror[1] = "<span style='color:red,font-weight:bold'>Bạn chưa nhập họ</span>";
	// 		myerror[2] = "<span style='color:red,font-weight:bold'>Bạn chưa nhập email</span>";
	// 		myerror[3] = "<span style='color:red,font-weight:bold'>Bạn chưa nhập số điện thoại</span>";
	// 		myerror[4] = "<span style='color:red,font-weight:bold'>Bạn chưa nhập lại số điện thoại</span>";
	// 		myerror[5] = "<span style='color:red,font-weight:bold'>Bạn chưa nhập địa chỉ</span>";

	// 	var nearby = new Array("z-firstName","z-lastName","z-email","z-number_phone","z-again_number_phone","z-address");


	// 	for(i  in data){
	// 		var error = myerror[i]
	// 		var div = nearby[i];

	// 		if (data[i]==""){
	// 			document.getElementById(div).innerHTML= error;
	// 		}else{
	// 			document.getElementById(div).innerHTML = "OK!";
	// 		}

	// 	}
	// }

});