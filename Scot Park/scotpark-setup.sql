INSERT INTO `companies` (
    `id`, `name`, `email`, `domain`,
    `address`, `mobile_no`,
    `business_type`, `business_catrgory`, `status`,
    `active`, `email_parsing`,
    `support_email_address`, `support_contact_no`,
    `ref_prefix`
) VALUES (
    23, 'Scot Park', 'bookings@elite.co.uk', 'elite.co.uk',
    '28-30 Inchinnan Road, Paisley, PA3 2PR', '07348186412',
    'individual', 'portal', 'active',
    1, 1,
    'support@elite.co.uk', '07348186412',
    'SP'
) ON DUPLICATE KEY UPDATE
    `name`                  = VALUES(`name`),
    `domain`                = VALUES(`domain`),
    `email`                 = VALUES(`email`),
    `address`               = VALUES(`address`),
    `mobile_no`             = VALUES(`mobile_no`),
    `support_email_address` = VALUES(`support_email_address`),
    `support_contact_no`    = VALUES(`support_contact_no`),
    `status`                = VALUES(`status`),
    `active`                = VALUES(`active`);

    INSERT INTO `airport_data` (
    `airport_id`, `airport_name`, `iata_code`, `icao_code`,
    `country`, `city`, `total_terminals`, `airport_type`, `website`, `company_id`
) VALUES (
    13, 'Heathrow', 'LHR', 'EGLL',
    'United Kingdom', 'London', 3, 'Public', 'https://www.heathrow.com', 23
) ON DUPLICATE KEY UPDATE
    `airport_name` = VALUES(`airport_name`),
    `iata_code`    = VALUES(`iata_code`),
    `company_id`   = VALUES(`company_id`);

    INSERT INTO `parking_products` (
    `id`, `company_id`, `airport_name`, `service_provider`, `product_name`,
    `operational_from`, `operational_to`,
    `service_type`, `nonflex`, `status`, `is_active`,
    `book_short_hours`, `edit_short_hours`, `cancel_short_hours`,
    `promocodes_applicable`,
    `point_1`, `point_2`, `point_3`,
    `product_description`, `product_overview`,
    `booking_email`, `airport_charges`
) VALUES
(50, 23, 'Heathrow', 'Scot Park', 'Scot Park Meet & Greet',
 '00:00:00', '23:59:00',
 'Meet & Greet', 'Refundable', 'Active', 1,
 48, 48, 48, 'Yes',
 'Professional Meet & Greet service', 'Drive straight to the terminal', 'Available 24/7',
 'Our Meet & Greet service at Heathrow Airport.',
 'Drive to the terminal drop-off zone. A Scot Park driver will meet you, collect your keys, and park your vehicle in our secure compound.',
 'bookings@elite.co.uk', 0.00),
(51, 23, 'Heathrow', 'Scot Park', 'Scot Park Park & Ride',
 '00:00:00', '23:59:00',
 'Park & Ride', 'Refundable', 'Active', 1,
 48, 48, 48, 'Yes',
 'Free shuttle to the terminal', 'Secure outdoor parking', 'CCTV monitored 24/7',
 'Our Park & Ride service at Heathrow Airport.',
 'Drive to our car park, park your vehicle, and take our regular shuttle bus directly to the terminal.',
 'bookings@elite.co.uk', 0.00)
ON DUPLICATE KEY UPDATE
    `product_name`  = VALUES(`product_name`),
    `service_type`  = VALUES(`service_type`),
    `is_active`     = VALUES(`is_active`);



    INSERT INTO `parking_product_price_bands`
    (`company_id`, `product_id`, `year`, `month`,
     `day_1`,`day_2`,`day_3`,`day_4`,`day_5`,`day_6`,`day_7`,`day_8`,`day_9`,`day_10`,
     `day_11`,`day_12`,`day_13`,`day_14`,`day_15`,`day_16`,`day_17`,`day_18`,`day_19`,`day_20`,
     `day_21`,`day_22`,`day_23`,`day_24`,`day_25`,`day_26`,`day_27`,`day_28`,`day_29`,`day_30`,`day_31`)
SELECT 23, p.id, 2026, m.mon,
    'A','A','A','A','A','A','A','A','A','A',
    'A','A','A','A','A','A','A','A','A','A',
    'A','A','A','A','A','A','A','A','A','A','A'
FROM parking_products p
JOIN (
    SELECT 'June'      AS mon UNION ALL SELECT 'July'      UNION ALL
    SELECT 'August'          UNION ALL SELECT 'September'  UNION ALL
    SELECT 'October'         UNION ALL SELECT 'November'   UNION ALL
    SELECT 'December'
) m ON 1=1
WHERE p.company_id = 23
  AND p.is_active = 1
  AND NOT EXISTS (
      SELECT 1 FROM parking_product_price_bands b
      WHERE b.product_id = p.id AND b.year = 2026 AND b.month = m.mon
  );


  INSERT INTO `parking_product_price_global_bands`
    (`company_id`, `product_id`, `band_name`, `increment_value`,
     `day_1`,`day_2`,`day_3`,`day_4`,`day_5`,`day_6`,`day_7`,`day_8`,`day_9`,`day_10`,
     `day_11`,`day_12`,`day_13`,`day_14`,`day_15`,`day_16`,`day_17`,`day_18`,`day_19`,`day_20`,
     `day_21`,`day_22`,`day_23`,`day_24`,`day_25`,`day_26`,`day_27`,`day_28`,`day_29`,`day_30`)
SELECT 23, p.id, 'A', 5.00,
    35.00, 40.00, 45.00, 50.00, 55.00, 60.00, 65.00, 70.00, 75.00, 80.00,
    85.00, 90.00, 95.00,100.00,105.00,110.00,115.00,120.00,125.00,13₀.₀₀,
    135.₀₀,14₀.₀₀,145.₀₀,15₀.₀₀,155.₀₀,16₀.₀₀,165.₀₀,17₀.₀₀,175.₀₀,18０.₀₀
FROM parking_products p
WHERE p.company_id = 23
  AND p.is_active = 1
  AND NOT EXISTS (
      SELECT 1 FROM parking_product_price_global_bands g
      WHERE g.product_id = p.id AND g.band_name = 'A'
  );


  INSERT INTO `company_parsing_email` (
    `company_id`, `company_parsing_email`, `email_password`, `email_host`
) VALUES (
    23, 'bookings@elite.co.uk', 'elite@elite&123987', 'mail.elite.co.uk'
) ON DUPLICATE KEY UPDATE
    `company_parsing_email` = VALUES(`company_parsing_email`),
    `email_password`        = VALUES(`email_password`),
    `email_host`            = VALUES(`email_host`);



    