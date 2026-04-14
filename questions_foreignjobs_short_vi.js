// Dọn phòng khách sạn & Phân loại hàng (Dành cho du học sinh) - Tiếng Việt
window.questions = [
  {
    "id": 5,
    "icon": "🏨",
    "question": "Bạn có thể đảm nhận công việc đòi hỏi thể lực như dọn phòng khách sạn và phân loại hàng hóa không?",
    "choices": [
      {
        "text": "Có, tôi tự tin về thể lực của mình",
        "score": 1.0,
        "emoji": "⭕"
      },
      {
        "text": "Tôi có thể xử lý ở mức độ nào đó",
        "score": 0.7,
        "emoji": "🟡"
      },
      {
        "text": "Tôi hơi lo lắng về sức khỏe",
        "score": 0.5,
        "emoji": "🟡"
      },
      {
        "text": "Công việc nặng nhọc thì khó với tôi",
        "score": 0.0,
        "emoji": "❌"
      }
    ],
    "explanation": "Dọn phòng khách sạn bao gồm trải giường và hút bụi, phân loại hàng đòi hỏi vận chuyển hàng hóa. Thể lực là yếu tố cần thiết."
  },
  {
    "id": 6,
    "icon": "⏰",
    "question": "Bạn có thể làm ca sáng sớm (từ 6 giờ sáng) hoặc ca tối không?",
    "choices": [
      {
        "text": "Có, tôi có thể làm bất kỳ khung giờ nào",
        "score": 1.0,
        "emoji": "⭕"
      },
      {
        "text": "Tôi sẽ quen dần",
        "score": 0.7,
        "emoji": "🟡"
      },
      {
        "text": "Tôi chỉ muốn làm ban ngày",
        "score": 0.5,
        "emoji": "🟡"
      },
      {
        "text": "Tôi không thể làm sáng sớm hoặc đêm",
        "score": 0.0,
        "emoji": "❌"
      }
    ],
    "explanation": "Dọn phòng khách sạn bận nhất sau khi khách trả phòng vào buổi sáng. Phân loại hàng thường cần ca sáng sớm hoặc đêm muộn."
  },
  {
    "id": 7,
    "icon": "📋",
    "question": "Bạn có thể học quy trình làm việc qua sổ tay hướng dẫn có hình ảnh minh họa không?",
    "choices": [
      {
        "text": "Có, tôi giỏi học qua hình ảnh",
        "score": 1.0,
        "emoji": "⭕"
      },
      {
        "text": "Có, tôi có thể học qua thực hành",
        "score": 0.7,
        "emoji": "🟡"
      },
      {
        "text": "Có thể mất chút thời gian",
        "score": 0.5,
        "emoji": "🟡"
      },
      {
        "text": "Tôi không giỏi đọc hướng dẫn",
        "score": 0.0,
        "emoji": "❌"
      }
    ],
    "explanation": "Ngay cả ở nơi làm việc không yêu cầu tiếng Nhật, bạn cần học quy trình từ sổ tay có hình ảnh. Khả năng hiểu trực quan rất quan trọng."
  },
  {
    "id": 8,
    "icon": "✅",
    "question": "Bạn có thể làm theo danh sách kiểm tra và hoàn thành từng nhiệm vụ một cách chính xác không?",
    "choices": [
      {
        "text": "Có, tôi coi trọng sự chính xác",
        "score": 1.0,
        "emoji": "⭕"
      },
      {
        "text": "Có, tôi sẽ cố gắng",
        "score": 0.7,
        "emoji": "🟡"
      },
      {
        "text": "Đôi khi tôi quên kiểm tra",
        "score": 0.5,
        "emoji": "🟡"
      },
      {
        "text": "Tôi muốn làm theo cách của mình",
        "score": 0.0,
        "emoji": "❌"
      }
    ],
    "explanation": "Dọn phòng khách sạn cần tuân theo danh sách kiểm tra, phân loại hàng cần xác minh nhãn vận chuyển. Sai sót dẫn đến khiếu nại nghiêm trọng."
  },
  {
    "id": 9,
    "icon": "🔄",
    "question": "Bạn có ngại lặp lại công việc giống nhau mỗi ngày không?",
    "choices": [
      {
        "text": "Không, tôi có thể làm việc đều đặn",
        "score": 1.0,
        "emoji": "⭕"
      },
      {
        "text": "Không vấn đề gì",
        "score": 0.7,
        "emoji": "🟡"
      },
      {
        "text": "Có thể tôi sẽ hơi chán",
        "score": 0.5,
        "emoji": "🟡"
      },
      {
        "text": "Tôi không thích công việc lặp lại",
        "score": 0.0,
        "emoji": "❌"
      }
    ],
    "explanation": "Cả dọn phòng khách sạn và phân loại hàng đều là công việc lặp lại hàng ngày. Cần có sự kiên nhẫn và bền bỉ."
  },
  {
    "id": 10,
    "icon": "🤝",
    "question": "Bạn có thể hợp tác với đồng đội bằng cử chỉ và ngôn ngữ cơ thể, ngay cả khi không cùng ngôn ngữ không?",
    "choices": [
      {
        "text": "Có, tôi sẽ chủ động giao tiếp",
        "score": 1.0,
        "emoji": "⭕"
      },
      {
        "text": "Có, tôi sẽ cố gắng",
        "score": 0.7,
        "emoji": "🟡"
      },
      {
        "text": "Tôi hơi lo lắng",
        "score": 0.5,
        "emoji": "🟡"
      },
      {
        "text": "Khó khăn nếu không cùng ngôn ngữ",
        "score": 0.0,
        "emoji": "❌"
      }
    ],
    "explanation": "Ngay cả khi không yêu cầu tiếng Nhật, làm việc nhóm vẫn cần thiết. Thái độ tích cực với nụ cười, chào hỏi và cử chỉ rất quan trọng."
  },
  {
    "id": 11,
    "icon": "🧹",
    "question": "Bạn có thể chú ý đến tiêu chuẩn sạch sẽ và vệ sinh không?",
    "choices": [
      {
        "text": "Có, sạch sẽ là ưu tiên hàng đầu của tôi",
        "score": 1.0,
        "emoji": "⭕"
      },
      {
        "text": "Có, tôi sẽ cẩn thận",
        "score": 0.7,
        "emoji": "🟡"
      },
      {
        "text": "Tôi sẽ làm bình thường",
        "score": 0.5,
        "emoji": "🟡"
      },
      {
        "text": "Tôi không quan tâm lắm",
        "score": 0.0,
        "emoji": "❌"
      }
    ],
    "explanation": "Trong dọn phòng khách sạn, ngay cả một sợi tóc cũng không được chấp nhận. Trong phân loại hàng, sản phẩm phải được xử lý sạch sẽ."
  },
  {
    "id": 12,
    "icon": "⚠️",
    "question": "Bạn có thể tuân thủ các quy tắc an toàn (đeo găng tay, kỹ thuật nâng đúng cách, v.v.) không?",
    "choices": [
      {
        "text": "Có, tôi sẽ luôn tuân thủ",
        "score": 1.0,
        "emoji": "⭕"
      },
      {
        "text": "Có, tôi sẽ tuân thủ",
        "score": 0.7,
        "emoji": "🟡"
      },
      {
        "text": "Hơi phiền phức",
        "score": 0.5,
        "emoji": "🟡"
      },
      {
        "text": "Tôi muốn tự quyết định",
        "score": 0.0,
        "emoji": "❌"
      }
    ],
    "explanation": "Dọn phòng liên quan đến hóa chất, phân loại hàng liên quan đến vật nặng. Không tuân thủ an toàn có thể dẫn đến chấn thương."
  },
  {
    "id": 13,
    "icon": "⏱️",
    "question": "Bạn có thể hoàn thành công việc trong thời gian quy định không?",
    "choices": [
      {
        "text": "Có, tôi có thể làm việc hiệu quả và đúng giờ",
        "score": 1.0,
        "emoji": "⭕"
      },
      {
        "text": "Có, tôi sẽ cố gắng",
        "score": 0.7,
        "emoji": "🟡"
      },
      {
        "text": "Có thể tôi cần nhiều thời gian hơn",
        "score": 0.5,
        "emoji": "🟡"
      },
      {
        "text": "Tôi muốn làm theo nhịp riêng",
        "score": 0.0,
        "emoji": "❌"
      }
    ],
    "explanation": "Khách sạn phải dọn xong trước giờ nhận phòng. Phân loại hàng phải kịp thời hạn vận chuyển. Quản lý thời gian rất quan trọng."
  },
  {
    "id": 14,
    "icon": "📅",
    "question": "Bạn có thể làm việc vào mùa cao điểm (cuối tuần, ngày lễ, cuối năm/đầu năm mới) không?",
    "choices": [
      {
        "text": "Có, tôi muốn làm việc vào mùa cao điểm",
        "score": 1.0,
        "emoji": "⭕"
      },
      {
        "text": "Có, tôi có thể",
        "score": 0.7,
        "emoji": "🟡"
      },
      {
        "text": "Tôi muốn được nghỉ",
        "score": 0.5,
        "emoji": "🟡"
      },
      {
        "text": "Tôi muốn nghỉ cuối tuần và ngày lễ",
        "score": 0.0,
        "emoji": "❌"
      }
    ],
    "explanation": "Khách sạn bận nhất vào cuối tuần và ngày lễ. Logistics cần thêm người vào cuối năm và mùa sale. Người làm được mùa cao điểm rất được trọng dụng."
  },
  {
    "id": 15,
    "icon": "🌟",
    "question": "Bạn có muốn phát triển kỹ năng qua công việc này và làm việc lâu dài không?",
    "choices": [
      {
        "text": "Có, tôi muốn phát triển kỹ năng và hướng đến vị trí quản lý",
        "score": 1.0,
        "emoji": "⭕"
      },
      {
        "text": "Có, tôi muốn tiếp tục một thời gian",
        "score": 0.7,
        "emoji": "🟡"
      },
      {
        "text": "Tôi chưa chắc chắn",
        "score": 0.5,
        "emoji": "🟡"
      },
      {
        "text": "Tôi chỉ muốn làm ngắn hạn",
        "score": 0.0,
        "emoji": "❌"
      }
    ],
    "explanation": "Với kinh nghiệm, bạn có thể thăng tiến lên trưởng nhóm hoặc quản lý. Người có động lực dài hạn dễ được tuyển dụng hơn."
  }
];
