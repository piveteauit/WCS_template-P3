INSERT INTO colors (name) VALUES ('Rouge'), ('Blanc');

INSERT INTO roles (name) VALUES ('Admin'), ('User');

INSERT INTO cepages (name)
VALUES ('Carbernet Sauvignon'), ('Merlot'), ('Pinot Noir'), ('Syrah'), ('Grenache'), ('Carignan'), ('Camay'), ('Malbec'), ('Mouvedre'), ('Ginsault'), ('Petit Verlot'), ('Carbernet Franc'), ('Tannat'), ('Sangiovese'), ('Tempranillo');

INSERT INTO operators (name)
VALUES (
        'Domaine de la Romanée-Conti'
    ), ('Château Margaux'), ('Domaine de la Vougeraie'), ('Domaine Zind-Humbrecht');

INSERT INTO terroirs (name)
VALUES ('Sud-Ouest'), ('Sud-Est'), ('Nord-Ouest'), ('Nord-Est');

INSERT INTO intensity (name)
VALUES ('Faible'), ('Moyen'), ('Fort');

INSERT INTO aromas (name)
VALUES ('Fruité'), ('Floral'), ('Epicé'), ('Boisé');

INSERT INTO flavors (name)
VALUES ('Acide'), ('Doux'), ('Tanique'), ('Equilibré'), ('Long en bouche');

INSERT INTO years (label)
VALUES 
('2012-01-01'),
('2013-01-01'),
('2014-01-01'),
('2015-01-01'),
('2016-01-01'),
('2017-01-01'),
('2018-01-01'),
('2019-01-01'),
('2020-01-01'),
('2021-01-01'),
('2022-01-01');


INSERT INTO bottle_per_cepage (cepage_id, terroir_id, color_id, year_id, operator_id, intensity_id, ref)
VALUES 
  (31, 9, 6, 1, 1, 4, 'REF12345'),
  (32, 10, 6, 2, 1, 5, 'REF23456'),
  (33, 9, 6, 3, 1, 6, 'REF34567'),
  (34, 11, 6, 4, 1, 4, 'REF45678'),
  (35, 12, 6, 5, 1, 5, 'REF56789'),
  (36, 9, 6, 6, 1, 6, 'REF67890'),
  (37, 10, 6, 7, 1, 4, 'REF78901'),
  (38, 11, 6, 8, 1, 5, 'REF89012'),
  (39, 9, 6, 9, 1, 6, 'REF90123'),
  (40, 12, 6, 10, 1, 4, 'REF01234'),
  (31, 10, 6, 2, 1, 5, 'REF12345'),
  (32, 11, 6, 3, 1, 6, 'REF23456'),
  (33, 12, 6, 4, 1, 4, 'REF34567'),
  (34, 9, 6, 5, 1, 5, 'REF45678'),
  (35, 10, 6, 6, 1, 6, 'REF56789'),
  (36, 11, 6, 7, 1, 4, 'REF67890'),
  (37, 12, 6, 8, 1, 5, 'REF78901'),
  (38, 9, 6, 9, 1, 6, 'REF89012'),
  (39, 10, 6, 10, 1, 4, 'REF90123'),
  (40, 11, 6, 1, 1, 5, 'REF01234');