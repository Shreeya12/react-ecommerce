const SHOP_DATA = [
    {
      id: 1,
      title: 'Lights',
      routeName: 'lights',
      items: [
        {
          id: 1,
          name: 'Maxim Vesper 37 1/2"W Satin Brass and Black 5-Light Pendant',
          imageUrl: 'https://myhomedecor.s3-us-west-1.amazonaws.com/lights/Maxim-vesper-light1.jpeg',
          price: 598
        },
        {
          id: 2,
          name: 'Possini Euro Swift Modern Mercury Glass Table Lamp ',
          imageUrl: 'https://myhomedecor.s3-us-west-1.amazonaws.com/lights/Possini-euro-light2.jpeg',
          price: 159
        },
        {
          id: 3,
          name: 'Colby Brushed Nickel Desk Lamp with Outlet and USB Port',
          imageUrl: 'https://myhomedecor.s3-us-west-1.amazonaws.com/lights/colby-lights3.jpeg',
          price: 120
        },
        {
          id: 4,
          name: 'Possini Euro Rivulet 18"W Spun Silver Metal Ceiling Light ',
          imageUrl: 'https://myhomedecor.s3-us-west-1.amazonaws.com/lights/Possini-euro-lights4.jpeg',
          price: 149
        },
        {
          id: 5,
          name: 'Orson 13 1/2" High Satin Nickel Wall Sconce ',
          imageUrl: 'https://myhomedecor.s3-us-west-1.amazonaws.com/lights/Orson-lights5.jpeg',
          price: 18
        },
        {
          id: 6,
          name: 'Kichler Lyndon 11 1/4" High Aluminum Outdoor Wall Light',
          imageUrl: 'https://myhomedecor.s3-us-west-1.amazonaws.com/lights/lights6.jpeg',
          price: 118
        },
        {
          id: 7,
          name: 'Feiss Newport 9"H Painted Brushed Steel Outdoor Wall Light ',
          imageUrl: 'https://myhomedecor.s3-us-west-1.amazonaws.com/lights/lights7.jpeg',
          price: 130
        },
        {
          id: 8,
          name: 'Magnificence Satin Nickel 24 1/2" Wide Crystal Chandelier -',
          imageUrl: 'https://myhomedecor.s3-us-west-1.amazonaws.com/lights/lights8.jpeg',
          price: 699
        },
        {
          id: 9,
          name: 'Soft Silver 4-Light 24" Wide Crystal Chandelier ',
          imageUrl: 'https://myhomedecor.s3-us-west-1.amazonaws.com/lights/lights9.jpeg',
          price: 599
        }
      ]
    },
    {
      id: 2,
      title: 'Decor',
      routeName: 'decor',
      items: [
        {
          id: 10,
          name: 'white jug',
          imageUrl: 'https://myhomedecor.s3-us-west-1.amazonaws.com/decor/decor10.jpg',
          price: 150
        },
        {
          id: 11,
          name: '3 Piece Dima Mirror Set',
          imageUrl: 'https://myhomedecor.s3-us-west-1.amazonaws.com/decor/Decor11.jpg',
          price: 45
        },
        {
          id: 12,
          name: 'Nisswa 3 Piece Narrow Designer Accent Mirror Set',
          imageUrl: 'https://myhomedecor.s3-us-west-1.amazonaws.com/decor/decor12.jpg',
          price: 109
        },
        {
          id: 13,
          name: 'Arlo 20" Wall Clock',
          imageUrl: 'https://myhomedecor.s3-us-west-1.amazonaws.com/decor/decor13.jpg',
          price: 160
        },
        {
          id: 14,
          name: 'Anjan the Elephant Jail Figurine',
          imageUrl: 'https://myhomedecor.s3-us-west-1.amazonaws.com/decor/decor14.jpg',
          price: 52
        },
        {
          id: 15,
          name: 'Textual Art on Wrapped Canvas',
          imageUrl: 'https://myhomedecor.s3-us-west-1.amazonaws.com/decor/decor15.jpg',
          price: 60
        },
        {
          id: 16,
          name: 'Metal Gather Script Sign Wall Décor',
          imageUrl: 'https://myhomedecor.s3-us-west-1.amazonaws.com/decor/decor16.jpg',
          price: 159
        },
        {
          id: 17,
          name: 'Indigo Forest',
          imageUrl: 'https://myhomedecor.s3-us-west-1.amazonaws.com/decor/decor17.jpg',
          price: 22
        }
      ]
    },
    {
      id: 3,
      title: 'Rugs',
      routeName: 'rugs',
      items: [
        {
          id: 18,
          name: `5' x 5' Soft Touch Shag Square Rug`,
          imageUrl: 'https://myhomedecor.s3-us-west-1.amazonaws.com/rugs/rugs18.jpg',
          price: 79
        },
        {
          id: 19,
          name: `5' x 8' Soft Touch Shag Rug`,
          imageUrl: 'https://myhomedecor.s3-us-west-1.amazonaws.com/rugs/rugs19.jpg',
          price: 149
        },
        {
          id: 20,
          name: `6' x 6' Soft Touch Shag Round Rug`,
          imageUrl: 'https://myhomedecor.s3-us-west-1.amazonaws.com/rugs/rugs20.jpg',
          price: 249
        },
        {
          id: 21,
          name: `7' x 10' Soft Touch Shag Rug`,
          imageUrl: 'https://myhomedecor.s3-us-west-1.amazonaws.com/rugs/rugs21.jpg',
          price: 165
        },
        {
          id: 22,
          name: `2' 7 x 10' Brighella Runner Rug`,
          imageUrl: 'https://myhomedecor.s3-us-west-1.amazonaws.com/rugs/rugs22.jpg',
          price: 59
        }
      ]
    },
    {
      id: 4,
      title: 'Beddings',
      routeName: 'beddings',
      items: [
        {
          id: 23,
          name: 'All Season Down Comforter',
          imageUrl: 'https://myhomedecor.s3-us-west-1.amazonaws.com/beddings/beddings23.jpg',
          price: 115
        },
        {
          id: 24,
          name: 'Aridas Reversible Duvet Cover Set',
          imageUrl: 'https://myhomedecor.s3-us-west-1.amazonaws.com/beddings/beddings24.jpg',
          price: 27
        },
        {
          id: 25,
          name: 'Zada Pintuck Reversible Duvet Cover Set',
          imageUrl: 'https://myhomedecor.s3-us-west-1.amazonaws.com/beddings/beddings25.jpg',
          price: 80
        },
        {
          id: 26,
          name: 'White Bridgestone Comforter Set',
          imageUrl: 'https://myhomedecor.s3-us-west-1.amazonaws.com/beddings/beddings26.jpg',
          price: 101
        },
        {
          id: 27,
          name: 'Keesey Pom Pom Comforter Set',
          imageUrl: 'https://myhomedecor.s3-us-west-1.amazonaws.com/beddings/beddings27.jpg',
          price: 95
        },
        {
          id: 28,
          name: ' 1800 Series 6 Piece Sheet Set',
          imageUrl: 'https://myhomedecor.s3-us-west-1.amazonaws.com/beddings/beddings28.jpg',
          price: 135
        },
        {
          id: 29,
          name: 'Siaosi Comforter Set',
          imageUrl: 'https://myhomedecor.s3-us-west-1.amazonaws.com/beddings/beddings29.jpg',
          price: 150
        }
      ]
    },
    {
      id: 5,
      title: 'Patio',
      routeName: 'patio',
      items: [
        {
          id: 30,
          name: 'Homall 4 Pieces Outdoor Patio Furnituret',
          imageUrl: 'https://myhomedecor.s3-us-west-1.amazonaws.com/patio/patio30.jpg',
          price: 325
        },
        {
          id: 31,
          name: 'Greendale Home Fashions Outdoor Porch Swing or Bench Cushion - Long',
          imageUrl: 'https://myhomedecor.s3-us-west-1.amazonaws.com/patio/patio31.jpeg',
          price: 60
        },
        {
          id: 32,
          name: 'Greendale Home Fashions Seat & Back Outdoor Chair Cushion - Short',
          imageUrl: 'https://myhomedecor.s3-us-west-1.amazonaws.com/patio/patio32.jpeg',
          price: 89
        },
        {
          id: 33,
          name: 'Grassingt 3 Piece Bistro Set',
          imageUrl: 'https://myhomedecor.s3-us-west-1.amazonaws.com/patio/patio33.jpg',
          price: 187
        },
        {
          id: 34,
          name: 'Bushnell 3 Piece Rattan Seating Group with Cushions',
          imageUrl: 'https://myhomedecor.s3-us-west-1.amazonaws.com/patio/patio34.jpg',
          price: 265
        },
        {
          id: 35,
          name: 'Zion 3 Piece Rattan 2 Person Seating Group',
          imageUrl: 'https://myhomedecor.s3-us-west-1.amazonaws.com/patio/patio35.jpg',
          price: 319
        }
      ]
    }
  ];
  
  export default SHOP_DATA;
  